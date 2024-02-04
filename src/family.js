import React from 'react'

export const Family = () => {
  return (
    <div className='w-full flex flex-col md:w-[1120px]'>
     <h1 className='w-full text-left bg-gray-400 py-1 border-t-0 border-l-2 border-r-2 border-b-2 border-black font-extrabold italic text-white'>II. FAMILY BACKGROUND</h1>
     <table>
        <tbody className='flex flex-nowrap border-b-2 border-l-2 border-r-2 border-black'>
            <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px] p-2'>
                <td className='text-sm w-full h-8'>22. SPOUSE'S SURNAME</td>
                <td className='text-sm w-full h-8'>FIRST NAME</td>
                <td className='text-sm w-full h-8'>MIDDLE NAME</td>
            </tr>
            <tr className='flex flex-col gap-2 border-r-2 border-black w-[400px]'>
                <td className='text-sm w-full h-8'></td>
                <td className='border-2 flex justify-end border-black border-l-0 border-r-0 text-sm w-full h-12 p-0'>
                    <div className='bg-gray-400 w-[200px] border-l-2 border-black'>
                        <p>NAME EXTENSION (JR, SR)</p>
                    </div>
                </td>
                <td className='text-sm w-full h-8'></td>
            </tr>
            <tr className='flex flex-col grow  border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0'>
                    <div className='bg-gray-400 w-full h-full flex justify-start items-center'>
                        <p className='text-xs m-0'>23. NAME of CHILDREN (Write full name and list all)</p>
                    </div>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
            <tr className='flex flex-col border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0 g-gray-400'>
                    <div className='bg-gray-400 w-full h-full flex justify-start items-center'>
                        <p className='text-xs m-0'>DATE OF BIRTH (mm/dd/yyyy)</p>
                    </div>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
        </tbody>
     </table>
     <table>
        <tbody className='flex flex-nowrap border-b-2 border-l-2 border-r-2 border-black'>
            <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px] '>
                <td className='text-sm w-full h-8 p-2'>OCCUPATION</td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0 p-2'>EMPLOYER/BUSINESS NAME</td>
                <td className='text-sm w-full h-8 border-2 border-black border-t-0 border-l-0 border-r-0 p-2'>BUSINESS ADDRESS</td>
                <td className='text-sm w-full h-8 p-2'>TELEPHONE NO.</td>
            </tr>
            <tr className='flex flex-col gap-2 border-r-2 border-black w-[400px]'>
                <td className='text-sm w-full h-8'></td>
                <td className='border-2 flex justify-end border-black border-l-0 border-r-0 text-sm w-full h-12 p-0'>
                </td>
                <td className='text-sm w-full h-8 border-2 border-black border-l-0 border-t-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
            <tr className='flex flex-col flex-1  border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0'>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8 border-2 border-black border-l-0 border-t-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
            <tr className='flex w-[160px] flex-col border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0 g-gray-400'>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8 border-2 border-black border-l-0 border-t-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
        </tbody>
     </table>
     <table>
        <tbody className='flex flex-nowrap border-b-2 border-l-2 border-r-2 border-black'>
            <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px] p-2'>
                <td className='text-sm w-full h-8'>24. FATHER'S SURNAME</td>
                <td className='text-sm w-full h-8'>FIRST NAME</td>
                <td className='text-sm w-full h-8'>MIDDLE NAME</td>
            </tr>
            <tr className='flex flex-col gap-2 border-r-2 border-black w-[400px]'>
                <td className='text-sm w-full h-8'></td>
                <td className='border-2 flex justify-end border-black border-l-0 border-r-0 text-sm w-full h-12 p-0'>
                    <div className='bg-gray-400 w-[200px] border-l-2 border-black'>
                        <p>NAME EXTENSION (JR, SR)</p>
                    </div>
                </td>
                <td className='text-sm w-full h-8'></td>
            </tr>
            <tr className='flex flex-col grow  border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0'>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
            <tr className='flex flex-col w-[160px] border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0 g-gray-400'>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8'></td>
            </tr>
        </tbody>
     </table>
     <table>
        <tbody className='flex flex-nowrap border-b-2 border-l-2 border-r-2 border-black'>
            <tr className='flex flex-col gap-2 border-r-2 border-black border-r-0 bg-gray-400 w-[200px] p-2'>
                <td className='text-sm w-full h-8'>25. MOTHER'S MAIDEN NAME</td>
                <td className='text-sm w-full h-8'>FIRST NAME</td>
                <td className='text-sm w-full h-8'>MIDDLE NAME</td>
            </tr>
            <tr className='flex flex-col  border-r-2 border-black w-[400px]'>
                <td className='text-sm w-full bg-gray-400 h-[40px]'></td>
                <td className='border-2 flex justify-end border-black border-l-2 border-r-0 text-sm w-full h-12 p-0'>
                </td>
                <td className='text-sm w-full h-[40px] border-0 border-black border-l-2'></td>
            </tr>
            <tr className='flex flex-col grow  border-r-0 border-black'>
                <td className='text-sm w-full border-r-2 border-black h-[40px] p-0 m-0'>
                </td>
                <td className='text-sm w-full h-12 border-2 border-r-2 border-black border-l-0'></td>
                <td className='text-sm w-full h-[40px] bg-gray-300 relative'>
                    <p className='absolute left-[138px] w-full top-2 text-red-700'>(Continue on separate sheet if necessary)</p></td>
            </tr>
            <tr className='flex flex-col w-[160px] border-r-2 border-black'>
                <td className='text-sm w-full h-[40px] p-0 m-0 g-gray-400'>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-[40px] bg-gray-300'></td>
            </tr>
        </tbody>
     </table>
    </div>
  )
}
