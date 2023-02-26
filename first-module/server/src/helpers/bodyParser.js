function bodyParser(request, callback) {
  let body = "";

  const receiveAllChunks = (chunk) => (body += chunk);

  request.on("data", receiveAllChunks);

  const sendBodyParsed = () => {
    body = JSON.parse(body);
    request.body = body;
    callback();
  };

  request.on("end", sendBodyParsed);
}

module.exports = bodyParser;
