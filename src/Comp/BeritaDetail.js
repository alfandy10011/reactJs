import React from 'react'

function BeritaDetail({match}) {
    return <h2>Judul Berita : {match.params.judul}</h2>
}
export default BeritaDetail
