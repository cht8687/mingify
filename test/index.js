import test from 'tape';
import ReactHover from '../src/mingify';

test('mingify', t => {
  t.ok(ReactHover instanceof Function, 'should be function');
  t.end();
});
