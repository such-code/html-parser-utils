import { Node } from 'domhandler';
import { ParserOptions } from 'htmlparser2/lib';
export declare function stringToRegExp($string: string): RegExp;
export declare function stringToDom($data: string, $options?: ParserOptions): Promise<Array<Node>>;
