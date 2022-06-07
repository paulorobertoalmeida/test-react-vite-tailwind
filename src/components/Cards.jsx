import React from 'react'

export default function Cards() {
    return (

        <div class="flex min-h-screen items-center justify-center p-10 bg-yellow-50">
            <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
                <div class="row-span-2 flex flex-col rounded-md border border-slate-200 bg-white">
                    <div class="h-1/2 flex-1"><img src="https://images.unsplash.com/photo-1630404991412-9504d094e8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" class="w-full object-cover object-right-top" alt="omnichannel" /></div>
                    <div class="p-10">
                        <h3 class="text-xl font-medium text-gray-700">Omnichannel support center</h3>
                        <p class="mt-2 text-slate-500">Chatwoot connects with popular customer communication channels like Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram, Line, etc., and helps you deliver a consistent customer experience across channels.</p>
                        
                    </div>
                </div>
                <div class="flex rounded-md border border-slate-200 bg-white">
                    <div class="flex-1 p-10">
                        <h3 class="text-xl font-medium text-gray-700">A live-chat that fits your brand</h3>
                        <p class="mt-2 text-slate-500">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
                        
                    </div>

                    <div class=" hidden h-full w-1/3 overflow-hidden lg:block">
                        <div class=" inset-0">
                            <img src="https://images.unsplash.com/photo-1455778977533-4a3ef39091c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="h-full w-full object-cover object-left-top" alt="" />
                        </div>
                    </div>
                </div>
                <div class="flex rounded-md border border-slate-200 bg-white">
                    <div class="flex-1 p-10">
                        <h3 class="text-xl font-medium text-gray-700">Respond faster, with automated chatbots</h3>
                        <p class="mt-2 text-slate-500">Integrate with chatbots using Rasa or Dialogflow to automate conversations. Qualify using chatbots and seamlessly handoff to human agents.</p>
                        
                    </div>

                    <div class=" hidden h-full w-1/3 overflow-hidden lg:block">
                        <div class=" inset-0">
                            <img src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="h-full w-full object-cover object-left-top" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
