/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

var Context = require('../context/context');

/**
 * Represents Base Caliper Event.
 * @constructor
 * @property {string} context Context
 * @property {string} type Type
 * @property {string} sourcedId Event identifier
 * @property {Object} actor Actor initiating the action
 * @property {string} action String representing the action
 * @property {Object} object Object of the interaction
 * @property {string} eventTime String representing Date (ISO 8601 format)
 * @property {Object} target Target
 * @property {Object} generated Generated
 * @property {Object} referrer Referrer
 * @property {Object} edApp EdApp Object
 * @property {Object} group Group Object
 * @property {Object} membership Membership Object
 * @property {Object} federatedSession Session Object
 * @property {Object} extensions Extensions Object
 */

// constructor
function Event() {
  this.setContext(Context.CONTEXT);
  this.setType(null);
  this.setSourcedId(null);
  this.setActor(null);
  this.setAction(null);
  this.setObject(null);
  this.setEventTime(null);
  this.setTarget(null);
  this.setGenerated(null);
  this.setReferrer(null);
  this.setEdApp(null);
  this.setGroup(null);
  this.setMembership(null);
  this.setFederatedSession(null);
  this.setExtensions(null);
}

// Setters for Caliper Event properties
Event.prototype.setContext = function(context) {
  this['@context'] = context;
};

Event.prototype.setType = function(type) {
  this['@type'] = type;
};

Event.prototype.setSourcedId = function(sourcedId) {
  this.sourcedId = sourcedId;
};

Event.prototype.setActor = function(actor) {
  this.actor = actor;
};

Event.prototype.setAction = function(action) {
  this.action = action;
};

Event.prototype.setObject = function(object) {
  this.object = object;
};

Event.prototype.setEventTime = function(eventTime) {
  this.eventTime = eventTime;
};

Event.prototype.setTarget = function(target) {
  this.target = target;
};

Event.prototype.setGenerated = function(generated) {
  this.generated = generated;
};

Event.prototype.setReferrer = function(referrer) {
  this.referrer = referrer;
};

Event.prototype.setEdApp = function(edApp) {
  this.edApp = edApp;
};

Event.prototype.setGroup = function(group) {
  this.group = group;
};

Event.prototype.setMembership = function(membership) {
  this.membership = membership;
};

Event.prototype.setFederatedSession = function(federatedSession) {
  this.federatedSession = federatedSession;
};

Event.prototype.setExtensions = function(extensions) {
  this.extensions = extensions;
};

module.exports = Event;