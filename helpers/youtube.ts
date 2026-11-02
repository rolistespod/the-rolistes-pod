const YOUTUBE_URL =
  /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
const YOUTUBE_ID =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
const LINK = /<a([^>]+)>(.+?)<\/a>/g;

const createYoutubeEmbed = (videoId: string): string =>
  '<iframe  src="https://www.youtube.com/embed/' +
  videoId +
  '" frameBorder="0" allowfullscreen></iframe><br/>';

// Replaces bare YouTube URLs in the post HTML with an embedded player.
// URLs inside <a> tags are set aside first so they stay regular links.
export const embedYoutubeLinks = (
  html: string | null | undefined
): string | null | undefined => {
  if (!html) return html;

  const videoUrls = html.match(YOUTUBE_URL);
  if (!videoUrls) return html;

  const links = html.match(LINK) || [];
  let result = links.reduce(
    (acc, link, i) => acc.replace(link, `#placeholder${i}#`),
    html
  );

  for (const url of videoUrls) {
    result = result.replace(url, createYoutubeEmbed(url.split(YOUTUBE_ID)[1]));
  }

  return links.reduce(
    (acc, link, i) => acc.replace(`#placeholder${i}#`, link),
    result
  );
};
