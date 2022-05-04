import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'


export function Widget(){


    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            {/*mostra hello words se isWidgetOpen == true*/}
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>

            {/* group: agrupar elementos  */}
            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className='w-6 h-6'/>

                {/* group-hover: hover no grupo de elementos */}
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className='p-2'>
                        Feedback
                    </span>
                </span>
            </Popover.Button>
        </Popover>
    )

}