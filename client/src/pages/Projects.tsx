import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Project } from '../types'
import { LaptopIcon, Loader2Icon, MessageSquareIcon, SmartphoneIcon, TabletIcon, XIcon } from 'lucide-react'
import { dummyProjects, dummyConversations } from '../assets/assets'

const Projects = () => {

  const { ProjectId } = useParams()
  const navigate = useNavigate()

  const [project,setProject] = useState<Project | null>(null)
  const [loading,setLoading] = useState(true)

  const [device,setDevice] = useState<'phone' |'tablet' |'desktop'>('desktop')

  const [isMenuOpen,setIsMenuOpen] = useState(false)

  const fetchProject = async () => {
        const project = dummyProjects.find((project) => project.id === ProjectId)
        setTimeout(()=>{
        if(project){
          setProject({...project, conversation : dummyConversations});
        }
        setLoading(false)
        },2000)
  }

  useEffect(() => {
    fetchProject()
  }, [])

  if(loading){
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <Loader2Icon className="size-7 animate-spin text-violet-200" /> 
        </div>
      </>
    )
  }

  return project ? (
    <div className='flex flex-col h-screen w-full bg-gray-900 text-white' >
      <div className='flex max-sm:flex-col sm:items-center gap-4 px-4 py-2 no-scrollbar' >
      <div className='flex items-center gap-2 sm:min-w-90 text-nowrap' >
        <img src="/favicon.svg" alt="logo" className='h-6 cursor-pointer' onClick={() => navigate('/')} />
        <div className='max-w-64 sm:max-w-xs' >
          <p className='text-medium text-sm capitalize truncate' >{project.name}</p>
          <p className='text-gray-400 text-xs -mt-0.5' >Previewing last saved version</p>
        </div>
        <div className='sm:hidden flex-1 flex justify-end'>
          {isMenuOpen ? <MessageSquareIcon onClick={()=>setIsMenuOpen(false)} className='size-6 cursor-pointer' />: <XIcon onClick={()=>setIsMenuOpen(true)} className='size-6 cursor-pointer' /> }
           </div>
      </div>
      <div className={`flex items-center gap-2 ${isMenuOpen ? "block" : "hidden"} sm:flex`} >
        <SmartphoneIcon onClick={() => setDevice('phone')} className={`p-1 rounded size-6 cursor-pointer ${device === 'phone' ? 'bg-gray-600' : ""}`} />
        <TabletIcon onClick={() => setDevice('tablet')} className={`p-1 rounded size-6 cursor-pointer ${device === 'tablet' ? 'bg-gray-600' : ""}`} />
        <LaptopIcon onClick={() => setDevice('desktop')} className={`p-1 rounded size-6 cursor-pointer ${device === 'desktop' ? 'bg-gray-600' : ""}`} />
      </div>
      <div></div>
        </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen' >
      <p className='text-gray-200 text-2xl font-medium ' >Unable to load Project</p>
    </div>
  )
}

export default Projects
