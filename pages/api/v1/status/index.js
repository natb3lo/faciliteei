// GET: api/v1/status
function status(request, response) {
  response.status(200).json({
    message: "Status endpoint comming soon...",
  });
}

export default status;
