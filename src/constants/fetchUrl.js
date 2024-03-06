// fetch 할때 사용하는 url을 정의해서 사용합니다.

const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM_URL = '2-7';

// 백그라운드 이미지 URL
const backGroundImgUrl = `${BASE_URL}/background-images/`;

// 대상 (Recipient)
const listUrl = `${BASE_URL}/${TEAM_URL}/recipients/?limit=16&offset=0&sort=`;

// post페이지 BaseURL
const POST_BASE_URL = `${BASE_URL}/${TEAM_URL}/recipients`;
// sort
const SORT_LIKE = 'like';

export { backGroundImgUrl, listUrl, POST_BASE_URL, SORT_LIKE };
