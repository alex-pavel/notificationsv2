using { cuid, managed } from '@sap/cds/common';
namespace my.db;

entity Notifications : cuid, managed {
    content     :   String;
}


