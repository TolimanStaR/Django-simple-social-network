(function () {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet()
    } else {
        document.body.appendChild(
            document.createElement('script')
        ).src = 'htts://f02f95c2.ngrok.io/static/js/bookmarklet.js?r=' +
            Math.floor(Math.random() * (Math.pow(10, 10) - 1))
    }
})();
