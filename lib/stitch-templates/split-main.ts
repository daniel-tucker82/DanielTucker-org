export function splitMainAtMarker(mainHtml: string, marker: string): [string, string] {
  const index = mainHtml.indexOf(marker);
  if (index === -1) {
    throw new Error(`Template marker not found: ${marker}`);
  }
  return [mainHtml.slice(0, index), mainHtml.slice(index)];
}
