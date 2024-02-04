import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

export const Personal = () => {
  return (
    <div className='w-full flex flex-col md:w-[1120px]'>
        <h1 className='w-full text-left bg-gray-400 py-1 border-l-2 border-t-0 border-r-2 border-b-2 border-black font-extrabold italic text-white'>I. PERSONAL INFORMATION</h1>
        <table>
            <tbody className='flex flex-wrap border-b-2 border-l-2 border-r-2 border-black'>
                <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px] p-2'>
                <td className='text-sm w-full h-8'>2. SURNAME</td>
                <td className='text-sm w-full h-8'> FIRST NAME</td>
                <td className='text-sm w-full h-8'> MIDDLE NAME</td>
                </tr>
                <tr className='flex flex-col grow'>
                <td className='w-full h-9'></td>
                <td className='border-2 border-l-0 border-black border-r-0 w-full h-12 flex justify-end items-end p-0'>
                    <div className='h-full bg-gray-400 w-[270px]'>
                        <p className='text-xs'>NAME EXTENSION(JR, SR)</p>
                    </div>
                </td>
                <td className='w-full h-8'></td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody className='flex flex-wrap border-b-2 border-l-2 border-r-2 border-black'>
                <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px]'>
                <td className='text-sm w-full h-12 flex flex-col p-2'>3. DATE OF BIRTH <span>(mm/dd/yyyy)</span></td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0 p-2'>4. PLACE OF BIRTH</td>
                <td className='text-sm w-full h-8 pl-2'>5. SEX</td>
                </tr>
                <tr className='flex flex-col w-[200px]'>
                <td className='text-sm w-full h-14 flex flex-col'></td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8 p-4 flex justify-between items-center'>
                <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Male</p>
                    </div>
                    <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Female</p>
                    </div>
                </td>
                </tr>
                <tr className='flex flex-col w-[250px] bg-gray-400 pt-2 border-2 border-black border-b-0 border-t-0'>
                <td className='text-sm w-full h-12 flex flex-col'>16. CITIZENSHIP</td>
                <td className='w-full flex justify-center items-center h-12 text-sm'> if holder of dual citizenship,</td>
                <td className='w-full flex justify-center items-center text-center h-8 text-sm'> please indicate the details</td>
                </tr>
                <tr  className='flex flex-col flex-wrap grow'>
                    <td>
                    <div className='flex p-4 pb-1.5 gap-16'>
                        <div className='flex gap-2 items-center'>
                        <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                        <p className='text-xs'>Filipino</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                        <p className='text-xs'>Dual Citizenship</p>
                        </div>
                    </div>
                    <div className='flex pl-40 gap-8'>
                        <div className='flex gap-2 items-center'>
                        <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                        <p className='text-xs'>by birth</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                        <p className='text-xs'>by naturalization</p>
                        </div>
                    </div>
                    </td>
                    <td className='text-sm w-full h-8 p-2 pl-48'>
                        <p>Pls. indicate country:</p>
                    </td>
                    <td className='w-full border-2 border-black border-r-0 border-l-0 border-b-0 grow p-0'>
                    <div className='flex justify-end h-full'>
                        <div className='bg-gray-300 border-2 border-r-0 border-b-0 border-t-0 border-black h-full w-[50px] flex justify-center items-center'>
                        <TiArrowSortedDown size={40} />
                        </div>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody className='flex flex-wrap border-b-2 border-l-2 border-r-2 border-black'>
                <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px]'>
                <td className='text-sm w-full h-28 flex flex-col p-2'>6. CIVIL STATUS</td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0 p-2'>7. HEIGHT (m)</td>
                <td className='text-sm w-full h-8 pl-2'>8. WEIGHT (kg)</td>
                </tr>
                <tr className='flex flex-col w-[200px]'>
                <td className='text-sm w-full h-[120px] flex flex-wrap p-2 gap-1.5'>
                    <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Single</p>
                    </div>
                    <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Married</p>
                    </div>
                    <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Widowed</p>
                    </div>
                    <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Separated</p>
                    </div>
                    <div className='flex gap-2 items-center w-2/5'>
                    <div className='border-2 border-black w-[12px] h-[12px]'> </div>
                    <p className='text-xs'>Other /s:</p>
                    </div>
                </td>
                <td className='text-sm w-full h-12 border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-8 p-4 flex justify-between items-center'>
                </td>
                </tr>
                <tr className='flex flex-col w-[200px] bg-gray-400 pt-2 border-2 border-black border-b-0 border-t-0'>
                <td className='text-sm w-full h-40'>
                    <p>17. RESIDENTIAL ADDRESS</p>
                </td>
                <td className='text-sm w-full h-8 p-4 flex justify-center items-center'>
                    <p>ZIP CODE</p>
                </td>
                </tr>
                <tr  className='flex flex-col flex-wrap grow p-0'>
                  <td className='h-[120px] flex flex-col w-full flex-wrap p-0'>
                    <div className='flex-1'></div>
                    <div className='h-[25px] border-2 border-black border-l-0 border-r-0 flex justify-around w-full'>
                        <p className='italic text-sm'>House/Block/Lot No.</p>
                        <p className='italic text-sm'>Street</p>
                    </div>
                    <div className='flex-1'></div>
                    <div className=' h-[25px] border-2 border-black border-l-0 border-r-0 flex justify-around w-full'>
                        <p className='italic text-sm m-0'>Subdivision/Village</p>
                        <p className='italic text-sm'>Barangay</p>
                    </div>
                  </td>
                  <td className='h-12 flex flex-col w-full flex-wrap p-0'>
                    <div className='grow'></div>
                    <div className='h-[20px] border-2 border-black border-l-0 border-r-0 flex justify-around w-full'>
                        <p className='italic text-sm'>City/Municipality</p>
                        <p className='italic text-sm'>Province</p>
                    </div>
                  </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody className='flex flex-wrap border-b-0 border-l-2 border-r-2 border-black'>
                <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px]'>
                <td className='text-sm w-full h-[40px] flex flex-col p-2'>9. BLOOD TYPE</td>
                <td className='text-sm w-full h-[40px] p-2 border-2 border-black border-l-0 border-r-0 p-2'>10. GSIS ID NO.</td>
                <td className='text-sm w-full h-[40px] border-b-2 border-black p-2'>11. PAG-IBIG ID NO.</td>
                <td className='text-sm w-full h-[40px] flex flex-col p-2'>12. PHILHEALTH NO.</td>
                </tr>
                <tr className='flex flex-col w-[200px]'>
                    <td className='text-sm w-full h-[48px] flex flex-wrap p-2 gap-1.5'>
                    
                    </td>
                    <td className='text-sm w-full h-[40px] border-t-2 border-black flex flex-wrap p-2 gap-1.5'>
                    
                    </td>
                    <td className='text-sm w-full h-[40px] border-2 border-black border-l-0 border-r-0'></td>
                    <td className='text-sm w-full h-[40px] p-2 flex justify-between items-center'>
                    </td>
                </tr>
                <tr className='flex flex-col w-[200px] bg-gray-400 pt-2 border-2 border-black border-b-0 border-t-0'>
                <td className='text-sm w-full h-36'>
                    <p>18. PERMANENT ADDRESS</p>
                </td>
                <td className='text-sm w-full h-[40px] p-2 flex justify-center items-center'>
                    <p>ZIP CODE</p>
                </td>
                </tr>
                <tr  className='flex flex-col flex-wrap grow p-0'>
                  <td className='h-[120px] flex flex-col w-full flex-wrap p-0'>
                    <div className='flex-1'></div>
                    <div className='h-[25px] border-2 border-black border-l-0 border-r-0 flex justify-around w-full'>
                        <p className='italic text-sm'>House/Block/Lot No.</p>
                        <p className='italic text-sm'>Street</p>
                    </div>
                    <div className='flex-1'></div>
                    <div className=' h-[25px] border-2 border-black border-l-0 border-r-0 flex justify-around w-full'>
                        <p className='italic text-sm m-0'>Subdivision/Village</p>
                        <p className='italic text-sm'>Barangay</p>
                    </div>
                  </td>
                  <td className='grow flex flex-col w-full flex-wrap p-0'>
                    <div className='grow'></div>
                    <div className='h-[22px] border-2 border-black border-l-0 border-r-0 flex justify-around w-full'>
                        <p className='italic text-sm'>City/Municipality</p>
                        <p className='italic text-sm'>Province</p>
                    </div>
                  </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody className='flex flex-wrap border-b-2 border-l-2 border-r-2 border-black'>
                <tr className='flex flex-col gap-2 border-r-2 border-black bg-gray-400 w-[200px] h-max'>
                    <td className='text-sm w-full h-[40px] border-2 border-black border-l-0 border-r-0 p-2'>13. SSS NO.</td>
                    <td className='text-sm w-full h-[40px] border-b-2 border-black p-2'>14. TIN NO.</td>
                    <td className='text-sm w-full h-[40px] pl-2'>15. AGENCY EMPLOYEE NO.</td>
                </tr>
                <tr className='flex flex-col w-[200px]'>
                <td className='text-sm w-full h-[40px] border-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-[48px] border-b-2 border-black flex justify-between items-center'>
                </td>
                <td className='text-sm w-full h-[40px] flex justify-between items-center'>
                </td>
                </tr>
                <tr className='flex flex-col w-[200px] bg-gray-400 border-2 border-black border-b-0 border-t-0'>
                <td className='text-sm w-full h-[40px] border-2 border-black border-l-0 border-r-0'>
                    <p className='text-sm'>19. TELEPHONE NO.</p>
                </td>
                <td className='text-sm w-full h-[48px] border-b-2 border-black flex justify-between items-center'>
                <p className='text-sm'>20. MOBILE NO.</p>
                </td>
                <td className='text-sm w-full h-[40px] flex justify-between items-center'>
                <p className='text-sm'>21. E-MAIL ADDRESS (if any)</p>
                </td>
                </tr>
                <tr  className='flex flex-col flex-wrap grow p-0'>
                <td className='text-sm w-full h-[40px] border-b-2 border-black border-l-0 border-r-0'></td>
                <td className='text-sm w-full h-[48px] border-b-2 border-black p-4 flex justify-between items-center'>
                </td>
                <td className='text-sm w-full h-[40px] p-4 flex justify-between items-center'>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
