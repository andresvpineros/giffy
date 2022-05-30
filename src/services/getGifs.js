const apiKey = 'R0VL8uv45hKEfZX6TDEekzQMno1AwOcd'

export default async function getGifs({ keyword } = {}) {
    const apiURl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=40&offset=0&rating=G&lang=en`;

    return fetch(apiURl)
      .then(response => response.json())
      .then(res => {
        const {data = []} = res;
        if(Array.isArray(data)){
            const gifs = data.map(gif => {
                const { images, title, id } = gif;
                const { url } = images.downsized_medium;
                return { title, id, url};  
            })
            return gifs;
        }

      })
}