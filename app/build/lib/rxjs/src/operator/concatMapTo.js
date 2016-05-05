System.register(['./mergeMapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mergeMapTo_1;
    /**
     * Projects each source value to the same Observable which is merged multiple
     * times in a serialized fashion on the output Observable.
     *
     * <span class="informal">It's like {@link concatMap}, but maps each value
     * always to the same inner Observable.</span>
     *
     * <img src="./img/concatMapTo.png" width="100%">
     *
     * Maps each source value to the given Observable `innerObservable` regardless
     * of the source value, and then flattens those resulting Observables into one
     * single Observable, which is the output Observable. Each new `innerObservable`
     * instance emitted on the output Observable is concatenated with the previous
     * `innerObservable` instance.
     *
     * __Warning:__ if source values arrive endlessly and faster than their
     * corresponding inner Observables can complete, it will result in memory issues
     * as inner Observables amass in an unbounded buffer waiting for their turn to
     * be subscribed to.
     *
     * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
     * set to `1`.
     *
     * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concat}
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link mergeMapTo}
     * @see {@link switchMapTo}
     *
     * @param {Observable} innerObservable An Observable to replace each value from
     * the source Observable.
     * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
     * A function to produce the value on the output Observable based on the values
     * and the indices of the source (outer) emission and the inner Observable
     * emission. The arguments passed to this function are:
     * - `outerValue`: the value that came from the source
     * - `innerValue`: the value that came from the projected Observable
     * - `outerIndex`: the "index" of the value that came from the source
     * - `innerIndex`: the "index" of the value from the projected Observable
     * @return {Observable} An observable of values merged together by joining the
     * passed observable with itself, one after the other, for each value emitted
     * from the source.
     * @method concatMapTo
     * @owner Observable
     */
    function concatMapTo(innerObservable, resultSelector) {
        return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
    }
    exports_1("concatMapTo", concatMapTo);
    return {
        setters:[
            function (mergeMapTo_1_1) {
                mergeMapTo_1 = mergeMapTo_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=concatMapTo.js.map