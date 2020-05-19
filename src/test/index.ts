import * as fs from 'fs';
import * as path from 'path';
import { DomRenderer, stringToDom } from '../lib';
import { Node } from 'domhandler/lib';

const testPagePath = path.resolve(__dirname, 'assets/test-page.html');
const testIncorrectSelfClosingPath = path.resolve(__dirname, 'assets/test-incorrect-self-closing.html');
const testCorrectSelfClosingPath = path.resolve(__dirname, 'assets/test-correct-self-closing.html');

function loadFileAsPromise($path: string): Promise<string> {
   return new Promise<string>(($resolve, $reject) => {
       fs.readFile($path, 'utf8', ($error, $content) => {
           if ($error) {
               $reject($error);
           } else {
               $resolve($content);
           }
       });
   });
}

loadFileAsPromise(testPagePath)
    .then($content => {
        return stringToDom($content)
            .then(($nodes: Array<Node>): string => {
                return new DomRenderer().renderNodes($nodes);
            })
            .then(($rendered: string): void => {
                if ($content !== $rendered) {
                    throw Error('Content doesn\'t match!');
                }
                console.log('First test passed!');
            })
    })
    .then(() => {
        return loadFileAsPromise(testIncorrectSelfClosingPath)
    })
    .then($content => {
        return stringToDom($content, { recognizeSelfClosing: true, })
            .then(($nodes: Array<Node>): string => {
                return new DomRenderer().renderNodes($nodes);
            })
            .then($rendered => {
                return loadFileAsPromise(testCorrectSelfClosingPath)
                    .then(stringToDom)
                    .then(($nodes: Array<Node>): string => {
                        return new DomRenderer().renderNodes($nodes);
                    })
                    .then($correctRendered => {
                        if ($rendered !== $correctRendered) {
                            throw Error('Incorrect self-closing tag handling.')
                        }
                        console.log('Second test passed!');
                    });
            })
    })
    .catch($error => {
        console.error($error);
        process.exit(0);
    });
