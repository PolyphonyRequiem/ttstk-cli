/* eslint-disable node/file-extension-in-import */
/* eslint-disable node/no-missing-import */
import {Greeter} from './index'

test('greeterTest', () => { expect(Greeter('Daniel')).toBe('Hello Daniel')})