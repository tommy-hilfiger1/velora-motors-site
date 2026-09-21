'use client';
import {motion} from 'framer-motion';
export function Reveal({children,className=''}:{children:React.ReactNode;className?:string}){return <motion.div className={className} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,ease:'easeOut'}}>{children}</motion.div>}
export function Counter({value,label}:{value:string;label:string}){return <div className="glass rounded-2xl p-5"><div className="font-display text-3xl font-bold">{value}</div><div className="mt-1 text-xs uppercase tracking-[.22em] text-white/45">{label}</div></div>}
