'use client'

import FormRenderer from '@components/commom/FormRenderer';

const page = ({ params, searchParams }: { params: any, searchParams: any }) => {
    return (
        <div>
            <FormRenderer />
        </div>
    )
}

export default page