const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e)
{
    e.preventDefault();
    const usersearch = form.elements.query.value;
    const config = {params : {q :usersearch}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    //can remove the above two lines to use the below one
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${usersearch}`);
    showImages(res.data);
    form.elements.query.value = '';
})

const showImages = (shows) => {
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach(img => img.remove());
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
