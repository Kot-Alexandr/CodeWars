// need torefactor code
// Before:
function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return
    {
        status: msg
    }
}
//   After:
const getStatus = (isBusy) => { return { status: isBusy ? "busy" : "available" } } 
