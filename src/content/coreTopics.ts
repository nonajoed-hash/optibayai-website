export const coreTopics = [
  {
    "slug": "scheduling",
    "title": "Scheduling & Dispatch",
    "eyebrow": "OptiPlace · Dayboard · OptiBoard",
    "headline": "Give every job a place.",
    "intro": "Build a schedule around real technician availability, work requirements and physical bay constraints—not a generic calendar.",
    "icon": "CalendarDays",
    "features": [
      [
        "Intelligent placement",
        "OptiPlace recommends eligible technicians and bays using the operational information available to the shop."
      ],
      [
        "Daily workload visibility",
        "See planned work and availability on the Dayboard, with human-controlled adjustments."
      ],
      [
        "Waiters and due-outs",
        "Account for waiting customers and promised completion times when arranging work."
      ],
      [
        "Capacity and rollover",
        "Use OBLI to understand workload, review scheduling conflicts and carry unfinished work forward."
      ]
    ],
    "flow": [
      [
        "Capture the work",
        "Enter the vehicle, requested operations and scheduling requirements."
      ],
      [
        "Review placement",
        "Consider the suggested technician, available time and appropriate bay."
      ],
      [
        "Confirm the plan",
        "The team retains authority over scheduling decisions."
      ],
      [
        "Adapt throughout the day",
        "Review changes, remaining work and tomorrow's workload."
      ]
    ],
    "note": "Core supports constraint-based placement and human-controlled scheduling. Advanced learned assignment and autonomous optimization belong to Catalyst."
  },
  {
    "slug": "birdseye",
    "title": "Birdseye & Facility Management",
    "eyebrow": "Birdseye · Facility Editor",
    "headline": "See your entire shop in one place.",
    "intro": "Bring the physical layout of your shop, parking and vehicle locations into the same operational picture.",
    "icon": "Grid3x3",
    "features": [
      [
        "Your actual facility",
        "Configure bays, aisles and parking in the Facility Editor; Birdseye uses the saved layout."
      ],
      [
        "Vehicle location",
        "See which vehicles occupy bays or parking spaces as locations are recorded."
      ],
      [
        "Specialty workspaces",
        "Represent alignment bays and other specialized work areas."
      ],
      [
        "One visual workspace",
        "Pan and zoom the unified floor and parking layout to focus on the area that matters."
      ]
    ],
    "flow": [
      [
        "Configure the facility",
        "Set up the shop's bays and parking spaces."
      ],
      [
        "Record vehicle arrival",
        "Associate the vehicle with a location."
      ],
      [
        "Track movement",
        "Update the vehicle's location as work progresses."
      ],
      [
        "Release at pickup",
        "Clear occupied parking when the vehicle leaves."
      ]
    ],
    "note": "Vehicle locations depend on recorded operational movements."
  },
  {
    "slug": "ticket-command-center",
    "title": "Ticket Command Center",
    "eyebrow": "One operational ticket",
    "headline": "Everything the next decision needs.",
    "intro": "Give the people working on a vehicle a shared place to understand the job, its progress and who is responsible.",
    "icon": "ClipboardList",
    "features": [
      [
        "Multi-job tickets",
        "Organize requested operations, diagnostic concerns and approved additions."
      ],
      [
        "Technician notes",
        "Record observations, work information and recommendations alongside the ticket."
      ],
      [
        "Operational history",
        "See ticket status and recorded workflow transitions."
      ],
      [
        "Customer and vehicle context",
        "Associate relevant customer and vehicle records with the work."
      ]
    ],
    "flow": [
      [
        "Create the ticket",
        "Capture the vehicle, concern and intended work."
      ],
      [
        "Review the work",
        "Identify operations and their current state."
      ],
      [
        "Record progress",
        "Capture notes, measured work and recommendations."
      ],
      [
        "Make the next decision",
        "Review the record before assigning, returning or completing work."
      ]
    ],
    "note": "The Ticket Command Center manages operational work. Some customer identity enhancements remain limited to selected beta shops."
  },
  {
    "slug": "workflow",
    "title": "Shop Workflow & FOH/BOH",
    "eyebrow": "Front of house · Back of house",
    "headline": "Never lose the next step.",
    "intro": "Make responsibility explicit as work moves between the advisor and the technician, including interruptions and additional-work decisions.",
    "icon": "Repeat2",
    "features": [
      [
        "Explicit custody",
        "Keep track of whether the ticket is with front of house or production."
      ],
      [
        "Kick to FOH",
        "Return work for advisor attention instead of silently leaving a technician waiting."
      ],
      [
        "Kick back to technician",
        "Return actionable work to production for placement and continuation."
      ],
      [
        "Completion and pickup",
        "Review finished work and release the vehicle's operational custody when it leaves."
      ]
    ],
    "flow": [
      [
        "Technician discovers an issue",
        "Record a finding or recommendation."
      ],
      [
        "Hand off to the advisor",
        "Pause or stop as appropriate and transfer custody."
      ],
      [
        "Advisor reviews",
        "Record the decision and approved additional work."
      ],
      [
        "Return to production",
        "Place the remaining work and continue with the appropriate operation."
      ]
    ],
    "note": "Customer approvals may be recorded for operational handoffs. Core complements existing business systems."
  },
  {
    "slug": "time-and-labor",
    "title": "Time & Labor Intelligence",
    "eyebrow": "OptiStart · OptiTime · OptiFinish",
    "headline": "Make work time mean something.",
    "intro": "Measure work at the operation level and keep planned, measured and remaining time distinct.",
    "icon": "Clock",
    "features": [
      [
        "Work timers",
        "Start, pause, resume and stop work against the appropriate operation."
      ],
      [
        "Operational timing",
        "Use planned start, baseline duration and estimated completion information."
      ],
      [
        "Time conservation",
        "Preserve recorded labor through supported schedule changes and ticket handoffs."
      ],
      [
        "End-of-day safeguards",
        "Contain forgotten running timers and route corrections through review."
      ]
    ],
    "flow": [
      [
        "Plan the work",
        "Assign a baseline duration and schedule."
      ],
      [
        "Start the operation",
        "Record the beginning of actual work."
      ],
      [
        "Pause or resume",
        "Preserve the record when work is interrupted."
      ],
      [
        "Finish and review",
        "Review measured work and any necessary correction."
      ]
    ],
    "note": "Core tracks operational availability and measured work, not payroll or commercial labor pricing."
  },
  {
    "slug": "analytics",
    "title": "Shop Analytics",
    "eyebrow": "Operational visibility",
    "headline": "Understand how your shop works.",
    "intro": "Use recorded operational evidence to identify workload patterns, interruptions and opportunities for better coordination.",
    "icon": "BarChart3",
    "features": [
      [
        "Technician performance",
        "Review available work and timing measurements."
      ],
      [
        "Advisor activity",
        "Understand recorded advisor-side workflow activity."
      ],
      [
        "Capacity and load",
        "Compare planned work and available operating capacity."
      ],
      [
        "Operational integrity",
        "Surface inconsistent states that need attention."
      ]
    ],
    "flow": [
      [
        "Capture operational events",
        "Record work, timing and handoffs."
      ],
      [
        "Review the measures",
        "Inspect the available shop-level metrics."
      ],
      [
        "Find an opportunity",
        "Identify areas that warrant human review."
      ],
      [
        "Adjust the process",
        "Make an informed operational decision and observe what follows."
      ]
    ],
    "note": "Metrics depend on accurate shop records. Cross-location benchmarking is not included in Core."
  },
  {
    "slug": "communications",
    "title": "OptiQueue & Communications",
    "eyebrow": "Appointment capture · Customer communication",
    "headline": "Keep the right people informed.",
    "intro": "Connect appointment capture and customer communication with the operational workflow, where configured.",
    "icon": "MessageSquare",
    "features": [
      [
        "OptiQueue",
        "A shop-specific online appointment request experience, included in Core and activated per shop."
      ],
      [
        "Appointment assistance",
        "Review appointment information and confirm scheduling decisions."
      ],
      [
        "Customer messages",
        "Support two-way texting and appointment reminders where messaging services are configured and consent is obtained."
      ],
      [
        "Internal notifications",
        "Bring relevant workflow events to the attention of the appropriate people."
      ]
    ],
    "flow": [
      [
        "Capture an appointment request",
        "Collect the information needed to review the requested work."
      ],
      [
        "Review capacity",
        "Consider the schedule and available resources."
      ],
      [
        "Confirm with the customer",
        "Use the shop's configured communication channels."
      ],
      [
        "Keep the team informed",
        "Coordinate the resulting work in the operational board."
      ]
    ],
    "note": "OptiQueue requires shop activation. Messaging requires appropriate service configuration and consent."
  }
] as const;
