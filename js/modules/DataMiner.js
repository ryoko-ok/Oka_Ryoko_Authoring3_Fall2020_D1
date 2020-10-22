async function fetchData(datasource){
    let resource = await fetch(dataesource).then(response => {
        // bang operator - means "does not equal"
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
        }

        return response;
    })

    // if we get success, then we can return back our resource after we parse it into plain JS
    let dataset = await resource.json();

    return dataset;
}

export { fetchData } ;