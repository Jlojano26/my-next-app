function Table(props){

    return (
        //some code goes here
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                </tr>

                <tr>
                    <td>Google</td>
                    <td>https://www.google.com</td>
                </tr>

                <tr>
                    <td>Amazon</td>
                    <td>https://www.amazon.com</td>
                </tr>

                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.URL}</td>
                </tr>
            </tbody>

        </table>
    )

}

export default Table