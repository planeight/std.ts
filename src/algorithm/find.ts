/**
 * @author Hector J. Vasquez <ipi.vasquez@gmail.com>
 *
 * @licence
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ascendingComparison as ascending} from './comparisons';

/**
 * Searches for the element specified. The array must be sorted, the bounds of the search
 * will be delimited by begin and end as [begin, end).
 * @param array The array where the search is going to be executed.
 * @param begin The initial position where to search.
 * @param end The final position where to search.
 * @param value The value to search.
 * @param compare A function specifying how to compare the elements of the
 * array.
 * @returns The index of the element wanted, if the element is not in the
 * array it returns -1.
 */
export function find(array: any[],
                           begin: number,
                           end: number,
                           value: any,
                           compare: (a: any, b: any) => number = ascending) {
  const idx = ff(begin, end);
  if (compare(value, array[idx])) {
    return -1;
  } else {
    return idx;
  }

  /**
   * Recursively searches value in array at [b, e).
   * @param b
   * @param e
   * @returns The position of value.
   */
  function ff(b: number, e: number): number {
    if (b === e) { // Found!
      return b;
    }

    const v = (b + e) >> 1;
    const c = compare(value, array[v]);

    if (c === 0) {
      return v;
    } else if (c < 0) {
      return ff(b, v);
    } else {
      return ff(v + 1, e);
    }
  }
}
