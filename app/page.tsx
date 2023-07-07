'use client'

import { FiHelpCircle } from 'react-icons/fi'

import FormRenderer from '@components/commom/FormRenderer';

const page = ({ params, searchParams }: { params: any, searchParams: any }) => {
    return (
        <div className='bg-gray-50'>
            <FormRenderer />
        </div>
    )
}

export default page