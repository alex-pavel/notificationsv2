using { my.db as my } from '../db/schema';

service notifications.requests {
    // entities
    entity notifications as projection on my.Notifications;

    // functions/actions
    function testFunction() returns String;
    function triggerNotification() returns String;
}