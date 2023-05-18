import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src="http://github.com/danielbrazrocha.png"
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        Daniel Rocha
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}
