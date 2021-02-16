export function numberFormatter(num, digits) {
  if (num < 10000) {
    return num.toLocaleString("ko-KR");
  }

  let si = [
      { value: 1e18, symbol: "e" },
      { value: 1e15, symbol: "p" },
      { value: 1e12, symbol: "t" },
      { value: 1e9, symbol: "g" },
      { value: 1e6, symbol: "m" },
      { value: 1e3, symbol: "k" },
    ],
    i;
  for (i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value).toFixed(digits).replace(/\.?0+$/, "") + si[i].symbol
      );
    }
  }
  return num;
}
