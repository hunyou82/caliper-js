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

var _ = require('lodash');
var context = require('../../context/context');
var entity = require('../entity');
var entityType = require('../entityType');

/**
 * Link Attempt to delegate Entity and assign default property values.
 */
var Attempt = _.assign(_.create(entity), {
  '@context': context.CONTEXT,
  '@type': entityType.ATTEMPT,
  actor: {},
  assignable: {},
  count: null,
  startedAtTime: null,
  endedAtTime: null,
  duration: null
});

module.exports = Attempt;