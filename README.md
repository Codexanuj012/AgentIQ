flowchart TD

subgraph group_client["Web application"]
  node_app["Client app<br/>[App.jsx]"]
  node_authpage["Sign-in<br/>[Auth.jsx]"]
  node_interviewpage["Interview<br/>[InterviewPage.jsx]"]
  node_historypage["Interview history"]
  node_reportpage["Interview report"]
  node_pricingpage["Pricing<br/>[Pricing.jsx]"]
  node_state["User state<br/>[userSlice.js]"]
end

subgraph group_api["API and domain"]
  node_server["Express API<br/>[index.js]"]
  node_authroutes["Auth routes<br/>[auth.route.js]"]
  node_userroutes["User routes<br/>[user.route.js]"]
  node_interviewroutes["Interview routes<br/>[interview.route.js]"]
  node_paymentroutes["Payment routes<br/>[payment.route.js]"]
  node_authctrl["Account handling<br/>[auth.controller.js]"]
  node_userctrl["Current user<br/>[user.controller.js]"]
  node_interviewctrl["Interview workflow"]
  node_paymentctrl["Payment handling"]
  node_authmw["Auth middleware<br/>[isAuth.js]"]
end

subgraph group_integrations["External services"]
  node_firebase["Firebase Auth"]
  node_ai["AI service"]
  node_razorpay["Razorpay service"]
  node_google["Google sign-in"]
  node_openrouter["OpenRouter"]
  node_razorpayexternal["Razorpay"]
end

subgraph group_data["Persistence"]
  node_userdb[("User records<br/>[user.model.js]")]
  node_interviewdb[("Interview records<br/>[interview.model.js]")]
  node_paymentdb[("Payment records<br/>[payment.model.js]")]
  node_database[("MongoDB connection<br/>[connectDb.js]")]
end

node_candidate(("Candidate"))

node_candidate -->|"uses"| node_app
node_app -->|"routes"| node_authpage
node_app -->|"routes"| node_interviewpage
node_app -->|"routes"| node_historypage
node_app -->|"routes"| node_reportpage
node_app -->|"routes"| node_pricingpage
node_app -->|"fetches current user"| node_server
node_app -->|"updates"| node_state
node_authpage -->|"signs in"| node_firebase
node_authpage -->|"posts credentials"| node_server
node_authpage -->|"updates"| node_state
node_server -->|"mounts"| node_authroutes
node_server -->|"mounts"| node_userroutes
node_server -->|"mounts"| node_interviewroutes
node_server -->|"mounts"| node_paymentroutes
node_server -->|"connects"| node_database
node_authctrl -->|"reads and writes"| node_userdb
node_authctrl -->|"creates accounts"| node_userdb
node_userctrl -->|"reads"| node_userdb
node_interviewctrl -->|"reads and updates credits"| node_userdb
node_interviewctrl -->|"creates and updates"| node_interviewdb
node_interviewctrl -->|"requests analysis"| node_ai
node_ai -->|"sends prompts"| node_openrouter
node_paymentctrl -->|"creates orders"| node_razorpay
node_razorpay -->|"requests orders"| node_razorpayexternal
node_paymentctrl -->|"creates and updates"| node_paymentdb
node_paymentctrl -->|"adds credits"| node_userdb

click node_app "https://github.com/codexanuj012/agentiq/blob/main/client/src/App.jsx"
click node_authpage "https://github.com/codexanuj012/agentiq/blob/main/client/src/pages/Auth.jsx"
click node_interviewpage "https://github.com/codexanuj012/agentiq/blob/main/client/src/pages/InterviewPage.jsx"
click node_historypage "https://github.com/codexanuj012/agentiq/blob/main/client/src/pages/InterviewHistory.jsx"
click node_reportpage "https://github.com/codexanuj012/agentiq/blob/main/client/src/pages/InterviewReport.jsx"
click node_pricingpage "https://github.com/codexanuj012/agentiq/blob/main/client/src/pages/Pricing.jsx"
click node_state "https://github.com/codexanuj012/agentiq/blob/main/client/src/redux/userSlice.js"
click node_server "https://github.com/codexanuj012/agentiq/blob/main/server/index.js"
click node_authroutes "https://github.com/codexanuj012/agentiq/blob/main/server/routes/auth.route.js"
click node_userroutes "https://github.com/codexanuj012/agentiq/blob/main/server/routes/user.route.js"
click node_interviewroutes "https://github.com/codexanuj012/agentiq/blob/main/server/routes/interview.route.js"
click node_paymentroutes "https://github.com/codexanuj012/agentiq/blob/main/server/routes/payment.route.js"
click node_authctrl "https://github.com/codexanuj012/agentiq/blob/main/server/controllers/auth.controller.js"
click node_userctrl "https://github.com/codexanuj012/agentiq/blob/main/server/controllers/user.controller.js"
click node_interviewctrl "https://github.com/codexanuj012/agentiq/blob/main/server/controllers/interview.controller.js"
click node_paymentctrl "https://github.com/codexanuj012/agentiq/blob/main/server/controllers/payment.controller.js"
click node_authmw "https://github.com/codexanuj012/agentiq/blob/main/server/middlewares/isAuth.js"
click node_ai "https://github.com/codexanuj012/agentiq/blob/main/server/services/openRouter.service.js"
click node_razorpay "https://github.com/codexanuj012/agentiq/blob/main/server/services/razorpay.service.js"
click node_userdb "https://github.com/codexanuj012/agentiq/blob/main/server/models/user.model.js"
click node_interviewdb "https://github.com/codexanuj012/agentiq/blob/main/server/models/interview.model.js"
click node_paymentdb "https://github.com/codexanuj012/agentiq/blob/main/server/models/payment.model.js"
click node_database "https://github.com/codexanuj012/agentiq/blob/main/server/config/connectDb.js"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_app,node_authpage,node_interviewpage,node_historypage,node_reportpage,node_pricingpage,node_state toneBlue
class node_server,node_authroutes,node_userroutes,node_interviewroutes,node_paymentroutes,node_authctrl,node_userctrl,node_interviewctrl,node_paymentctrl,node_authmw toneAmber
class node_firebase,node_ai,node_razorpay,node_google,node_openrouter,node_razorpayexternal toneMint
class node_userdb,node_interviewdb,node_paymentdb,node_database toneRose
class node_candidate toneIndigo
