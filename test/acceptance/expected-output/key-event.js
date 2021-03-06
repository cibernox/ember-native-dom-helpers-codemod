import { keyEvent, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('keyEvent');

test('visiting /foo', async function(assert) {
  await visit('/foo');

  await keyEvent('#bar', 'keypress', 13);
  assert.equal(currentURL(), '/foo');
});