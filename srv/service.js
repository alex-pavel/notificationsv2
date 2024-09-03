const { buildNotification, messages } = require("./lib/utils.js")
const cds = require('@sap/cds')
const LOG = cds.log('notifications');
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
const { getDestination, buildHeadersForDestination } = require("@sap-cloud-sdk/connectivity");



class NotificationService extends cds.Service {

  /**
   * Emits a notification. Method notify can be used alternatively.
   * @param {string} [event] - The notification type.
   * @param {object} message - The message object
   */
  emit(event, message) {
    if (!event) {
      LOG._warn && LOG.warn(messages.NO_OBJECT_FOR_NOTIFY);
      return;
    }
    // Outbox calls us with a req object, e.g. { event, data, headers }
    if (event.event) return super.emit(event)
    // First argument is optional for convenience
    if (!message) [message, event] = [event]
    // CAP events translate to notification types and vice versa
    if (event) message.type = event
    else event = message.type || message.NotificationTypeKey || 'Default'
    // Prepare and emit the notification
    message = buildNotification(message)
    return super.emit(event, message)
  }

  /**
   * That's just a semantic alias for emit.
   */
  notify(type, message) {
    return this.emit(type, message)
  }
}
module.exports = NotificationService;


// Without Generic Outbox only alert.notify() can be used, not alert.emit()
// Remove that when @sap/cds with Generic Outbox is released
if (!cds.outboxed) {
  class OutboxedNotificationService extends require('@sap/cds/libx/_runtime/messaging/Outbox') { }
  OutboxedNotificationService.prototype.notify = NotificationService.prototype.emit
  module.exports = OutboxedNotificationService
}

class TriggerService extends cds.Service {
  async init() {
    this.on('triggerNotification', async (data, req) => {
      // Fetch the destination to the notifications service.
      // It is required that your app is bound to both XSUAA and destination service
      const notificationServiceDestination = await getDestination({ destinationName: "SAP_Notifications" });

      // Fetch the CSRF token and the __VCAP_ID__ and JSESSIONID cookies required for the POST request below.
      const csrfHeaders = await buildHeadersForDestination(notificationServiceDestination, { url: "v2/NotificationType.svc" });
      await executeHttpRequest(notificationServiceDestination, {
        url: "v2/NotificationType.svc/NotificationTypes",
        method: "post",
        data: "notificationType", // the Notification Type payload
        headers: csrfHeaders
      });
    });

    await super.init();
  }
}







module.exports = TriggerService
