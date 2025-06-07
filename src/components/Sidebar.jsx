import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = ['phones', 'computers', 'power banks'];

const Sidebar = () => {
    return (
        <div className="w-40 bg-base-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories.map(category => (
                    <li key={category}>
                        <NavLink
                            to={`/category/${category}`}
                            className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : "text-gray-700"
                            }
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
