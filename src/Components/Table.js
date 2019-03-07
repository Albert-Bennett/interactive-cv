import React, {Component} from 'react'

class Table extends Component{
    render(){
        return (
            <table>
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <td>Bob Bobson</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Bert Barber</td>
                        <td>Accountant</td>
                    </tr>
                    <tr>
                        <td>Ron Marker</td>
                        <td>Marker Salesman</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;