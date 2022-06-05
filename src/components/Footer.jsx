import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <h1>Footer</h1>
            <div>
                <ul className="flex items-center space-x-10 text-sm">
                    <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
                    <li><Link to="/about" className="text-gray-400 hover:text-gray-100">About Us</Link></li>
                    <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li>
                </ul>
            </div>

        </div>
    )
}
