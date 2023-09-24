export const motionsScroll = {
  setTheData:{},
  setTheLayout: (_el) => {
    if (_el.offsetTop == undefined) return;

    if (_el.offsetHeight - innerHeight <= innerHeight) {
      return {
        sectionTop: _el.offsetTop,
        sectionHeight: _el.offsetHeight,
      };
    } else {
      return {
        sectionTop: _el.offsetTop,
        sectionHeight: _el.offsetHeight - innerHeight,
      };
    }
  },
  calcValue: (_el, _options, _scroll) => {
    motionsScroll["setTheData"]["currentScroll"] = Math.max(
      0,
      _scroll - _el.sectionTop
    );
    motionsScroll["setTheData"]["partScroll"] = Math.max(
      0,
      motionsScroll["setTheData"]["currentScroll"] -
        _el.sectionHeight * _options.startPoint
    );
    motionsScroll["setTheData"]["partStart"] =
      _el.sectionHeight * _options.startPoint;
    motionsScroll["setTheData"]["partEnd"] =
      _el.sectionHeight * _options.endPoint;
    motionsScroll["setTheData"]["partRatio"] = Math.min(
      1,
      motionsScroll["setTheData"]["partScroll"] /
        (motionsScroll["setTheData"]["partEnd"] -
          motionsScroll["setTheData"]["partStart"])
    );

    if (
      motionsScroll["setTheData"]["currentScroll"] <=
      motionsScroll["setTheData"]["partStart"]
    ) {
      motionsScroll["setTheData"]["partValue"] = _options.startValue;
    } else if (
      motionsScroll["setTheData"]["currentScroll"] >=
      motionsScroll["setTheData"]["partEnd"]
    ) {
      motionsScroll["setTheData"]["partValue"] = _options.endValue;
    } else {
      motionsScroll["setTheData"]["partValue"] =
        motionsScroll["setTheData"]["partRatio"].toFixed(4) *
          1 *
          (_options.endValue - _options.startValue) +
        _options.startValue;
    }
    return motionsScroll["setTheData"]["partValue"];
  },
  calcRatio: (_el, _scroll) => {
    if (_el.sectionTop !== undefined) {
      return (
        (Math.max(0, _scroll - _el.sectionTop) / _el.sectionHeight).toFixed(4) *
        1
      );
    }
  },
};
