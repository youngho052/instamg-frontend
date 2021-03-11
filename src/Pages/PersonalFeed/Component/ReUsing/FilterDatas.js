export function FilterDatas(datas, showRecommentIdx) {
  datas.filter((data, idx) => {
    return idx < showRecommentIdx;
  });
}
