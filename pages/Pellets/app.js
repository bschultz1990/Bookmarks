

navigator.permissions.query({name: "clipboard-write"}).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    function updateClipboard(newClip) {
      navigator.clipboard.writeText(newClip).then(() => {
        alert("copied!")
      }, () => {
        alert("no copy")
      });
    }
  }
});
