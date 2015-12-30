import test from 'tape';
import mingify from '../src/mingify';

test('mingify', t => {
  t.ok(mingify instanceof Function, 'should be function');
  t.end();
});
