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

var moment = require('moment');
var test = require('tape');

var eventFactory = require('../../src/events/eventFactory');
var SessionEvent = require('../../src/events/sessionEvent');
var SessionActions = require('../../src/actions/sessionActions');

var entityFactory = require('../../src/entities/entityFactory');
var Person = require('../../src/entities/agent/person');
var Session = require('../../src/entities/session/session');
var SoftwareApplication = require('../../src/entities/agent/SoftwareApplication');

var jsonCompare = require('../testUtils');

test('Create a SessionEvent (loggedIn) and validate properties', function (t) {

  // Plan for N assertions
  t.plan(1);

  const BASE_IRI = "https://example.edu";

  // The Actor
  var actor = entityFactory().create(Person, BASE_IRI.concat("/users/554433"));

  // The Action
  var action = SessionActions.LOGGED_IN;

  // The Object of the interaction
  var obj = entityFactory().create(SoftwareApplication, BASE_IRI, { version: "v2" });

  // Event time
  var eventTime = moment.utc("2016-11-15T10:15:00.000Z");

  // Session
  var session = entityFactory().create(Session, BASE_IRI.concat("/sessions/1f6442a482de72ea6ad134943812bff564a76259"), {
    actor: actor,
    dateCreated: moment.utc("2016-11-15T10:00:00.000Z"),
    startedAtTime: moment.utc("2016-11-15T10:00:00.000Z")
  });

  // Event Id GUID
  var eventId = "341db3d9-71cc-4081-9423-cbed73cb0179";

  // Assert that key attributes are the same
  var event = eventFactory().create(SessionEvent, {
    id: eventId,
    actor: actor,
    action: action,
    object: obj,
    eventTime: eventTime,
    session: session
  });

  // Assert that the JSON produced is the same
  jsonCompare('caliperEventSessionLoggedIn', event, t);
});