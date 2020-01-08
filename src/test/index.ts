import * as fs from 'fs';
import * as path from 'path';
import {DomRenderer, stringToDom} from '../lib';
import {Node} from 'domhandler/lib';

const testPagePath = path.resolve(__dirname, 'assets/test-page.html');

fs.readFile(testPagePath, 'utf8', ($error, $content) => {
    if ($error) {
        console.error($error);
        process.exit(0);
    }

    stringToDom($content)
        .then(($nodes: Array<Node>): string => {
            return new DomRenderer().renderNodes($nodes);
        })
        .then(($rendered: string):void => {
            if ($content !== $rendered) {
                throw Error('Content doesn\'t match!');
            }
            console.log('Test passed!');
        })
        .catch($error => {
            console.error($error);
            process.exit(0);
        });
});
