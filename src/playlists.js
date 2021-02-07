import fetch from 'node-fetch'

const fetchJson = url => fetch(url).then(res => res.json())
const clear = str => str
  .replace(/feat\. /gi, '')
  .replace(/ft\. /gi, '')
  .replace(/& /gi, '')
  .replace(/&amp; /gi, '')
  .replace(/\(PI\) /gi, '')

export default [{
  playlistId: '6gHJB62EMpfvlR6IKAlE7V',
  fetchTracks: () => fetchJson('http://icecast.vrtcdn.be/radio2_benebene.xspf')
    .then(({ content }) => content.map(({ artist, title }) =>
      clear(`${artist} ${title}`)))
    .then(tracks => tracks.map(track => ({ id: track, track }))),
}]
