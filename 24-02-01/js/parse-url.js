const url = require("url");

// 예시 문자열: "http://example.com/?name=John&age=25"
const urlString = "http://example.com/?name=John&age=25";

// URL을 파싱하여 객체로 변환
const parsedUrl = url.parse(urlString, true);

// 쿼리 파라미터를 JSON으로 만들기
const queryParams = parsedUrl.query;
const jsonString = JSON.stringify(queryParams);

console.log(jsonString);
