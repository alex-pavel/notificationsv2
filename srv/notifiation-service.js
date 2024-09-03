const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  // Connect to the NotificationService
  const alert = await cds.connect.to('notifications');

  // After an 'Incident' is created, send a notification
  this.after('CREATE', 'Incidents', async (data, req) => {
    await alert.notify('IncidentResolved', {
      recipients: [data.customer.id],
      data: {
        customer: data.customer.info,
        title: data.title,
        user: req.user.id,
      }
    });
  });
});
