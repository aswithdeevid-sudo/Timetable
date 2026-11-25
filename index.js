// 1. DATA MODELS & HACKATHON PRESET DATASET (CS SEMESTER)
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const DAY_NAMES = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday'
};
const PERIODS = [
  { id: 1, label: 'Period 1', time: '09:00 - 10:00', shift: 'MORNING' },
  { id: 2, label: 'Period 2', time: '10:00 - 11:00', shift: 'MORNING' },
  { id: 3, label: 'Period 3', time: '11:00 - 12:00', shift: 'MORNING' },
  { id: 4, label: 'Period 4', time: '13:00 - 14:00', shift: 'AFTERNOON' },
  { id: 5, label: 'Period 5', time: '14:00 - 15:00', shift: 'AFTERNOON' },
  { id: 6, label: 'Period 6', time: '15:00 - 16:00', shift: 'AFTERNOON' }
];

// Color palette per subject code for crisp visual distinction
const SUBJECT_COLORS = [
  { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-950', badge: 'bg-indigo-600 text-white', accent: 'text-indigo-600' },
  { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-950', badge: 'bg-sky-600 text-white', accent: 'text-sky-600' },
  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-950', badge: 'bg-emerald-600 text-white', accent: 'text-emerald-600' },
  { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-950', badge: 'bg-amber-600 text-white', accent: 'text-amber-600' },
  { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-950', badge: 'bg-violet-600 text-white', accent: 'text-violet-600' },
  { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-950', badge: 'bg-teal-600 text-white', accent: 'text-teal-600' },
  { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-950', badge: 'bg-fuchsia-600 text-white', accent: 'text-fuchsia-600' },
  { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-950', badge: 'bg-blue-600 text-white', accent: 'text-blue-600' },
];

function getHackathonDefaultState() {
  return {
    batches: [
      { id: 'CS-A', name: 'CS-A', size: 62 },
      { id: 'CS-B', name: 'CS-B', size: 58 },
      { id: 'CS-C', name: 'CS-C', size: 65 }
    ],
    rooms: [
      { id: 'R101', name: 'Room 101', type: 'LECTURE', capacity: 70 },
      { id: 'R102', name: 'Room 102', type: 'LECTURE', capacity: 70 },
      { id: 'R103', name: 'Room 103', type: 'LECTURE', capacity: 60 },
      { id: 'R201', name: 'Auditorium 201', type: 'LECTURE', capacity: 120 },
      { id: 'LAB-OS', name: 'Systems Lab A', type: 'LAB', capacity: 70 },
      { id: 'LAB-DB', name: 'Database Lab B', type: 'LAB', capacity: 70 }
    ],
    faculty: [
      { id: 'F1', name: 'Dr. Sharma', maxHours: 14, preference: 'MORNING', unavailable: ['Fri-5', 'Fri-6'] },
      { id: 'F2', name: 'Prof. Ananya Iyer', maxHours: 14, preference: 'MORNING', unavailable: ['Mon-1'] },
      { id: 'F3', name: 'Dr. Vikram Rao', maxHours: 14, preference: 'AFTERNOON', unavailable: ['Tue-1', 'Tue-2'] },
      { id: 'F4', name: 'Prof. Meera Nair', maxHours: 12, preference: 'ANY', unavailable: [] },
      { id: 'F5', name: 'Dr. Arjun Das', maxHours: 14, preference: 'AFTERNOON', unavailable: ['Thu-1'] },
      { id: 'F6', name: 'Prof. Neha Kulkarni', maxHours: 12, preference: 'MORNING', unavailable: [] },
      { id: 'F7', name: 'Dr. Rohan Verma', maxHours: 12, preference: 'ANY', unavailable: ['Wed-6'] },
      { id: 'F8', name: 'Prof. Siddharth Sen', maxHours: 12, preference: 'AFTERNOON', unavailable: [] },
      { id: 'F9', name: 'Dr. Priya Menon', maxHours: 12, preference: 'MORNING', unavailable: [] },
      { id: 'F10', name: 'Prof. Kabir Joshi', maxHours: 12, preference: 'ANY', unavailable: [] }
    ],
    // 8 distinct CS courses across 3 batches, including 3-hour continuous Labs
    subjects: [
      // Batch CS-A
      { id: 'S1', code: 'CS301', name: 'Operating Systems', batchId: 'CS-A', facultyId: 'F1', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 0 },
      { id: 'S2', code: 'CS301L', name: 'Operating Systems Lab', batchId: 'CS-A', facultyId: 'F1', type: 'LAB', hoursPerWeek: 3, colorIdx: 4 },
      { id: 'S3', code: 'CS302', name: 'Database Management Systems', batchId: 'CS-A', facultyId: 'F2', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 1 },
      { id: 'S4', code: 'CS302L', name: 'Database Systems Lab', batchId: 'CS-A', facultyId: 'F3', type: 'LAB', hoursPerWeek: 3, colorIdx: 6 },
      { id: 'S5', code: 'CS303', name: 'Design & Analysis of Algorithms', batchId: 'CS-A', facultyId: 'F4', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 2 },
      { id: 'S6', code: 'CS304', name: 'Computer Networks', batchId: 'CS-A', facultyId: 'F5', type: 'LECTURE', hoursPerWeek: 2, colorIdx: 3 },

      // Batch CS-B
      { id: 'S7', code: 'CS301', name: 'Operating Systems', batchId: 'CS-B', facultyId: 'F1', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 0 },
      { id: 'S8', code: 'CS301L', name: 'Operating Systems Lab', batchId: 'CS-B', facultyId: 'F8', type: 'LAB', hoursPerWeek: 3, colorIdx: 4 },
      { id: 'S9', code: 'CS302', name: 'Database Management Systems', batchId: 'CS-B', facultyId: 'F6', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 1 },
      { id: 'S10', code: 'CS302L', name: 'Database Systems Lab', batchId: 'CS-B', facultyId: 'F3', type: 'LAB', hoursPerWeek: 3, colorIdx: 6 },
      { id: 'S11', code: 'CS305', name: 'Software Engineering', batchId: 'CS-B', facultyId: 'F7', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 5 },

      // Batch CS-C
      { id: 'S12', code: 'CS301', name: 'Operating Systems', batchId: 'CS-C', facultyId: 'F9', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 0 },
      { id: 'S13', code: 'CS301L', name: 'Operating Systems Lab', batchId: 'CS-C', facultyId: 'F5', type: 'LAB', hoursPerWeek: 3, colorIdx: 4 },
      { id: 'S14', code: 'CS306', name: 'Artificial Intelligence', batchId: 'CS-C', facultyId: 'F10', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 7 },
      { id: 'S15', code: 'CS302L', name: 'Database Systems Lab', batchId: 'CS-C', facultyId: 'F8', type: 'LAB', hoursPerWeek: 3, colorIdx: 6 },
      { id: 'S16', code: 'CS303', name: 'Design & Analysis of Algorithms', batchId: 'CS-C', facultyId: 'F4', type: 'LECTURE', hoursPerWeek: 3, colorIdx: 2 }
    ],
    allocations: [], // Array of { id, subjectId, batchId, facultyId, roomId, day, period, span, isLabBlock, blockGroupId }
    uniformLunchBreak: true,
    telemetry: {
      solveTimeMs: 0,
      backtracks: 0,
      prefScore: 100,
      gini: 0,
      unallocated: []
    }
  };
}

// Application Runtime State
let appState = null;
let previousAllocationsSnapshot = null; // For 1-click Undo after drag-and-drop clash
let currentMainTab = 'timetable';
let currentResourceSubTab = 'subjects';
let viewPerspective = 'batch'; // 'batch' | 'faculty' | 'room'
let selectedEntityId = 'CS-A';
let activeClashes = [];

// 2. INITIALIZATION & LOCALSTORAGE PERSISTENCE
const STORAGE_KEY = 'classclockwork_zeroclash_v1';

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      appState = JSON.parse(saved);
    } else {
      appState = getHackathonDefaultState();
    }
  } catch (e) {
    appState = getHackathonDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn('LocalStorage quota exceeded or disabled.');
  }
}

function resetToHackathonDemo() {
  appState = getHackathonDefaultState();
  selectedEntityId = 'CS-A';
  viewPerspective = 'batch';
  runCSPSolver();
  showToast('Hackathon Demo Dataset restored & conflict-free timetable generated.', 'success');
}

// =========================================================================
// 3. BACKTRACKING CSP SOLVER ENGINE WITH MRV HEURISTIC
// =========================================================================
function runCSPSolver() {
  const startTime = performance.now();
  let backtracks = 0;
  const MAX_BACKTRACKS = 3500;

  // Build scheduling tasks:
  // 1) 3-hour Continuous Lab Macro-Blocks (span = 3, scheduled as atomic afternoon blocks P4-P6)
  // 2) 1-hour Lecture Slots (span = 1)
  const tasks = [];
  appState.subjects.forEach(sub => {
    if (sub.type === 'LAB') {
      // Treat 3-hour lab as an atomic macro-slot
      const blocksCount = Math.max(1, Math.floor(sub.hoursPerWeek / 3));
      for (let i = 0; i < blocksCount; i++) {
        tasks.push({
          taskId: `${sub.id}-LAB-${i}`,
          subject: sub,
          span: 3,
          isLab: true
        });
      }
    } else {
      for (let i = 0; i < sub.hoursPerWeek; i++) {
        tasks.push({
          taskId: `${sub.id}-LEC-${i}`,
          subject: sub,
          span: 1,
          isLab: false
        });
      }
    }
  });

  // Helper: Get valid candidate assignments (day, startPeriod, room) for a task given current partial schedule
  function getValidDomain(task, currentAllocs, facultyHoursMap) {
    const sub = task.subject;
    const batch = appState.batches.find(b => b.id === sub.batchId);
    const faculty = appState.faculty.find(f => f.id === sub.facultyId);
    if (!batch || !faculty) return [];

    // Check faculty max weekly hours limit
    const currentFacHrs = facultyHoursMap[faculty.id] || 0;
    if (currentFacHrs + task.span > faculty.maxHours) {
      return [];
    }

    // Filter compatible rooms (type match + seating capacity >= batch size)
    const eligibleRooms = appState.rooms.filter(r => {
      const typeMatch = task.isLab ? r.type === 'LAB' : r.type === 'LECTURE';
      const capMatch = r.capacity >= batch.size;
      return typeMatch && capMatch;
    });

    if (eligibleRooms.length === 0) return [];

    const candidates = [];
    // Lab macro-blocks prefer Afternoon continuous block (Period 4 -> spans 4, 5, 6) or Morning (Period 1 -> spans 1, 2, 3)
    const possibleStartPeriods = task.isLab ? [4, 1] : [1, 2, 3, 4, 5, 6];

    for (const day of DAYS) {
      // Avoid scheduling two lectures of the same subject on the same day for better student balance
      if (!task.isLab) {
        const alreadySameSubjectToday = currentAllocs.some(
          a => a.subjectId === sub.id && a.day === day
        );
        if (alreadySameSubjectToday) continue;
      }

      for (const startP of possibleStartPeriods) {
        const periodsCovered = [];
        for (let offset = 0; offset < task.span; offset++) {
          periodsCovered.push(startP + offset);
        }

        // Ensure periods don't overflow Period 6
        if (periodsCovered[periodsCovered.length - 1] > 6) continue;

        // Check faculty unavailability
        const facUnavailable = periodsCovered.some(p =>
          faculty.unavailable && faculty.unavailable.includes(`${day}-${p}`)
        );
        if (facUnavailable) continue;

        // Check Batch & Faculty hard clashes across all covered periods
        const batchBusy = currentAllocs.some(
          a => a.batchId === batch.id && a.day === day && periodsCovered.includes(a.period)
        );
        if (batchBusy) continue;

        const facultyBusy = currentAllocs.some(
          a => a.facultyId === faculty.id && a.day === day && periodsCovered.includes(a.period)
        );
        if (facultyBusy) continue;

        // Check each eligible room for availability across all covered periods
        for (const room of eligibleRooms) {
          const roomBusy = currentAllocs.some(
            a => a.roomId === room.id && a.day === day && periodsCovered.includes(a.period)
          );
          if (roomBusy) continue;

          // Score soft constraints (Faculty Morning/Afternoon preference + Afternoon preference for 3-hr labs)
          let score = 0;
          const pObj = PERIODS.find(p => p.id === startP);
          if (faculty.preference === pObj.shift) score += 10;
          if (task.isLab && startP === 4) score += 8; // Afternoon dedicated lab macro-block

          // Slight randomization tie-breaker for diverse balanced days
          score += Math.random() * 2;

          candidates.push({
            day,
            startPeriod: startP,
            periodsCovered,
            roomId: room.id,
            score
          });
        }
      }
    }

    // Order values by highest soft-constraint score first (Least Constraining / Best Soft Fit)
    candidates.sort((a, b) => b.score - a.score);
    return candidates;
  }

  const assignedAllocs = [];
  const facultyHoursMap = {};
  const unallocatedTasks = [];

  // Backtracking search with Minimum Remaining Values (MRV) heuristic
  function backtrack(remainingTasks) {
    if (remainingTasks.length === 0) return true;
    if (backtracks > MAX_BACKTRACKS) return false;

    // MRV Heuristic: Pick the unassigned task with the FEWEST valid domain options (labs naturally surface first!)
    let bestIdx = 0;
    let smallestDomain = null;

    for (let i = 0; i < remainingTasks.length; i++) {
      const t = remainingTasks[i];
      const domain = getValidDomain(t, assignedAllocs, facultyHoursMap);
      // Prioritize 3-hour labs strictly first, then smallest domain size
      const effectiveSize = (t.isLab ? 0 : 1000) + domain.length;
      if (smallestDomain === null || effectiveSize < smallestDomain.effectiveSize) {
        smallestDomain = { domain, effectiveSize };
        bestIdx = i;
      }
    }

    const currentTask = remainingTasks[bestIdx];
    const nextRemaining = remainingTasks.filter((_, idx) => idx !== bestIdx);
    const domain = smallestDomain.domain;

    for (const choice of domain) {
      const blockGroupId = `GRP-${currentTask.taskId}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const newRecords = choice.periodsCovered.map((p, idx) => ({
        id: `${blockGroupId}-P${p}`,
        blockGroupId,
        subjectId: currentTask.subject.id,
        batchId: currentTask.subject.batchId,
        facultyId: currentTask.subject.facultyId,
        roomId: choice.roomId,
        day: choice.day,
        period: p,
        span: currentTask.span,
        isLabBlock: currentTask.isLab,
        isBlockStart: idx === 0
      }));

      // Apply assignment
      assignedAllocs.push(...newRecords);
      facultyHoursMap[currentTask.subject.facultyId] =
        (facultyHoursMap[currentTask.subject.facultyId] || 0) + currentTask.span;

      if (backtrack(nextRemaining)) {
        return true;
      }

      // Undo assignment (Backtrack)
      backtracks++;
      assignedAllocs.splice(assignedAllocs.length - newRecords.length, newRecords.length);
      facultyHoursMap[currentTask.subject.facultyId] -= currentTask.span;
    }

    return false;
  }

  const solved = backtrack(tasks);

  // Graceful fallback if heavily over-constrained: greedy best-effort placement so app never freezes
  if (!solved) {
    assignedAllocs.length = 0;
    Object.keys(facultyHoursMap).forEach(k => delete facultyHoursMap[k]);
    // Sort labs first
    const sortedTasks = [...tasks].sort((a, b) => (b.isLab ? 1 : 0) - (a.isLab ? 1 : 0));
    for (const t of sortedTasks) {
      const domain = getValidDomain(t, assignedAllocs, facultyHoursMap);
      if (domain.length > 0) {
        const choice = domain[0];
        const blockGroupId = `GRP-${t.taskId}-${Math.random().toString(36).slice(2, 6)}`;
        choice.periodsCovered.forEach((p, idx) => {
          assignedAllocs.push({
            id: `${blockGroupId}-P${p}`,
            blockGroupId,
            subjectId: t.subject.id,
            batchId: t.subject.batchId,
            facultyId: t.subject.facultyId,
            roomId: choice.roomId,
            day: choice.day,
            period: p,
            span: t.span,
            isLabBlock: t.isLab,
            isBlockStart: idx === 0
          });
        });
        facultyHoursMap[t.subject.facultyId] = (facultyHoursMap[t.subject.facultyId] || 0) + t.span;
      } else {
        unallocatedTasks.push(`${t.subject.code} (${t.subject.batchId})`);
      }
    }
  }

  const endTime = performance.now();
  const elapsedMs = Math.max(1, Math.round(endTime - startTime));

  appState.allocations = assignedAllocs;
  previousAllocationsSnapshot = JSON.parse(JSON.stringify(assignedAllocs));

  // Compute Analytics Metrics
  const metrics = computeMetrics(assignedAllocs);
  appState.telemetry = {
    solveTimeMs: elapsedMs,
    backtracks,
    prefScore: metrics.prefScore,
    gini: metrics.gini,
    unallocated: unallocatedTasks
  };

  saveState();
  refreshAllUI();

  if (unallocatedTasks.length === 0) {
    showToast(`Conflict-free timetable generated in ${elapsedMs} ms (${backtracks} backtracks).`, 'success');
  } else {
    showToast(`Schedule generated with ${unallocatedTasks.length} over-constrained slot(s) unallocated.`, 'warning');
  }
}

// =========================================================================
// 4. REAL-TIME CLASH DETECTION AUDITOR
// =========================================================================
function detectClashes(allocations) {
  const clashes = [];
  const clashingAllocIds = new Set();

  // Group allocations by Day + Period
  const slotMap = {};
  allocations.forEach(a => {
    const key = `${a.day}-${a.period}`;
    if (!slotMap[key]) slotMap[key] = [];
    slotMap[key].push(a);
  });

  Object.entries(slotMap).forEach(([slotKey, items]) => {
    const [day, periodStr] = slotKey.split('-');
    const periodNum = parseInt(periodStr, 10);

    // 1. Check Faculty Double-Booking, Room Double-Booking, Batch Double-Booking
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];

        if (a.facultyId === b.facultyId) {
          const fac = appState.faculty.find(f => f.id === a.facultyId);
          const rA = appState.rooms.find(r => r.id === a.roomId);
          const rB = appState.rooms.find(r => r.id === b.roomId);
          clashingAllocIds.add(a.id);
          clashingAllocIds.add(b.id);
          clashes.push({
            type: 'FACULTY_CLASH',
            message: `Clash: ${fac ? fac.name : a.facultyId} already booked in ${rA ? rA.name : a.roomId} & ${rB ? rB.name : b.roomId} (${DAY_NAMES[day]}, Period ${periodNum})`
          });
        }

        if (a.roomId === b.roomId) {
          const room = appState.rooms.find(r => r.id === a.roomId);
          clashingAllocIds.add(a.id);
          clashingAllocIds.add(b.id);
          clashes.push({
            type: 'ROOM_CLASH',
            message: `Clash: ${room ? room.name : a.roomId} double-booked for ${a.batchId} and ${b.batchId} (${DAY_NAMES[day]}, Period ${periodNum})`
          });
        }

        if (a.batchId === b.batchId) {
          clashingAllocIds.add(a.id);
          clashingAllocIds.add(b.id);
          clashes.push({
            type: 'BATCH_CLASH',
            message: `Clash: Student Batch ${a.batchId} has overlapping classes in Period ${periodNum} (${DAY_NAMES[day]})`
          });
        }
      }
    }

    // 2. Single-item Hard Constraints: Faculty Unavailability & Room Capacity/Type
    items.forEach(a => {
      const fac = appState.faculty.find(f => f.id === a.facultyId);
      const room = appState.rooms.find(r => r.id === a.roomId);
      const batch = appState.batches.find(b => b.id === a.batchId);
      const sub = appState.subjects.find(s => s.id === a.subjectId);

      if (fac && fac.unavailable && fac.unavailable.includes(`${day}-${periodNum}`)) {
        clashingAllocIds.add(a.id);
        clashes.push({
          type: 'FACULTY_UNAVAILABLE',
          message: `Constraint Violation: ${fac.name} is marked unavailable on ${DAY_NAMES[day]} Period ${periodNum}`
        });
      }

      if (room && batch && room.capacity < batch.size) {
        clashingAllocIds.add(a.id);
        clashes.push({
          type: 'CAPACITY_EXCEEDED',
          message: `Capacity Violation: ${room.name} (Cap: ${room.capacity}) cannot fit ${batch.name} (${batch.size} students)`
        });
      }

      if (room && sub && sub.type === 'LAB' && room.type !== 'LAB') {
        clashingAllocIds.add(a.id);
        clashes.push({
          type: 'ROOM_TYPE_MISMATCH',
          message: `Equipment Violation: ${sub.name} requires a Computer Lab, not ${room.name}`
        });
      }
    });
  });

  // Deduplicate identical clash messages
  const uniqueMessages = [];
  const seen = new Set();
  clashes.forEach(c => {
    if (!seen.has(c.message)) {
      seen.add(c.message);
      uniqueMessages.push(c);
    }
  });

  return { clashes: uniqueMessages, clashingAllocIds };
}

// Deliberately inject a realistic clash (Dr. Sharma double-booked in Room 102) for instant hackathon demo
function injectDemoClash() {
  if (appState.allocations.length === 0) {
    runCSPSolver();
  }
  previousAllocationsSnapshot = JSON.parse(JSON.stringify(appState.allocations));

  // Find a class taught by Dr. Sharma (F1)
  const sharmaAlloc = appState.allocations.find(a => a.facultyId === 'F1' && !a.isLabBlock);
  // Find another batch's class at a different slot where F1 is NOT teaching
  const targetAlloc = appState.allocations.find(
    a => a.facultyId !== 'F1' && !a.isLabBlock && !(a.day === sharmaAlloc?.day && a.period === sharmaAlloc?.period)
  );

  if (sharmaAlloc && targetAlloc) {
    // Move Dr. Sharma's class onto the exact same Day & Period in Room 102
    sharmaAlloc.day = targetAlloc.day;
    sharmaAlloc.period = targetAlloc.period;
    sharmaAlloc.roomId = 'R102';
    // Also ensure another class or Dr. Sharma has a collision
    targetAlloc.facultyId = 'F1';
    targetAlloc.roomId = 'R102';

    saveState();
    refreshAllUI();
    showToast('Demo Clash Injected: Dr. Sharma double-booked in Room 102!', 'error');
  }
}

function revertLastMove() {
  if (previousAllocationsSnapshot) {
    appState.allocations = JSON.parse(JSON.stringify(previousAllocationsSnapshot));
    saveState();
    refreshAllUI();
    showToast('Reverted to previous conflict-free schedule state.', 'success');
  }
}

// =========================================================================
// 5. DRAG-AND-DROP MANUAL SCHEDULE ADJUSTMENT
// =========================================================================
let draggedAllocId = null;

function handleDragStart(event, allocId) {
  draggedAllocId = allocId;
  event.dataTransfer.setData('text/plain', allocId);
  event.dataTransfer.effectAllowed = 'move';
  event.currentTarget.style.opacity = '0.55';
}

function handleDragEnd(event) {
  event.currentTarget.style.opacity = '1';
  document.querySelectorAll('.drag-over-cell').forEach(el => el.classList.remove('drag-over-cell'));
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drag-over-cell');
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove('drag-over-cell');
}

function handleDrop(event, targetDay, targetPeriod) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over-cell');

  const allocId = event.dataTransfer.getData('text/plain') || draggedAllocId;
  if (!allocId) return;

  const draggedItem = appState.allocations.find(a => a.id === allocId);
  if (!draggedItem) return;

  if (draggedItem.day === targetDay && draggedItem.period === targetPeriod) return;

  // Save snapshot for 1-click undo
  previousAllocationsSnapshot = JSON.parse(JSON.stringify(appState.allocations));

  // If it's a 3-hour continuous lab block, move all 3 periods together!
  if (draggedItem.isLabBlock) {
    const blockItems = appState.allocations
      .filter(a => a.blockGroupId === draggedItem.blockGroupId)
      .sort((a, b) => a.period - b.period);

    // Clamp start period so 3-hour lab stays within Periods 1..6 (e.g., max start P4)
    const clampedStart = Math.min(4, Math.max(1, targetPeriod));
    blockItems.forEach((item, idx) => {
      item.day = targetDay;
      item.period = clampedStart + idx;
    });
  } else {
    // Single 1-hour lecture move
    draggedItem.day = targetDay;
    draggedItem.period = targetPeriod;
  }

  saveState();
  refreshAllUI();

  // Check if the drop introduced any clashes
  const audit = detectClashes(appState.allocations);
  if (audit.clashes.length > 0) {
    showToast(audit.clashes[0].message, 'error');
  } else {
    showToast(`Moved class to ${DAY_NAMES[targetDay]}, Period ${targetPeriod} — 0 Clashes.`, 'success');
  }
}

// =========================================================================
// 6. ANALYTICS & GINI COEFFICIENT CALCULATOR
// =========================================================================
function computeMetrics(allocations) {
  // 1. Faculty teaching hours array
  const hoursPerFaculty = appState.faculty.map(f => {
    return allocations.filter(a => a.facultyId === f.id).length;
  });

  // Gini Coefficient calculation: G = sum_i sum_j |x_i - x_j| / (2 * n * sum(x))
  const n = hoursPerFaculty.length;
  const totalHours = hoursPerFaculty.reduce((acc, v) => acc + v, 0);
  let gini = 0;
  if (n > 0 && totalHours > 0) {
    let diffSum = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        diffSum += Math.abs(hoursPerFaculty[i] - hoursPerFaculty[j]);
      }
    }
    gini = diffSum / (2 * n * totalHours);
  }

  // 2. Soft preference satisfaction %
  let prefEligible = 0;
  let prefMatched = 0;
  allocations.forEach(a => {
    const fac = appState.faculty.find(f => f.id === a.facultyId);
    const pObj = PERIODS.find(p => p.id === a.period);
    if (fac && pObj && fac.preference !== 'ANY') {
      prefEligible++;
      if (fac.preference === pObj.shift) prefMatched++;
    }
  });
  const prefScore = prefEligible === 0 ? 100 : Math.round((prefMatched / prefEligible) * 100);

  return {
    gini: Number(gini.toFixed(2)),
    prefScore,
    totalHours
  };
}

// =========================================================================
// 7. UI RENDERING ENGINE
// =========================================================================
function refreshAllUI() {
  const audit = detectClashes(appState.allocations);
  activeClashes = audit.clashes;

  // Update live metrics
  const liveMetrics = computeMetrics(appState.allocations);
  document.getElementById('metric-time').textContent = `${appState.telemetry.solveTimeMs} ms`;
  document.getElementById('metric-backtracks').textContent = appState.telemetry.backtracks;
  document.getElementById('metric-prefs').textContent = `${liveMetrics.prefScore}%`;
  document.getElementById('metric-gini').textContent = liveMetrics.gini.toFixed(2);
  document.getElementById('resource-badge-count').textContent = appState.subjects.length;

  // Update Top Status Pill & Clash Auditor Banner
  const statusPill = document.getElementById('global-status-pill');
  const clashBanner = document.getElementById('clash-auditor-banner');

  if (activeClashes.length === 0) {
    statusPill.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200';
    statusPill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500"></span><span>0 Clashes Verified • Optimal Schedule</span>`;
    clashBanner.classList.add('hidden');
  } else {
    statusPill.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300 animate-pulse';
    statusPill.innerHTML = `<span class="w-2 h-2 rounded-full bg-rose-600"></span><span>${activeClashes.length} Active Hard Clash${activeClashes.length > 1 ? 'es' : ''}</span>`;

    clashBanner.classList.remove('hidden');
    document.getElementById('clash-count-badge').textContent = `${activeClashes.length} Violation${activeClashes.length > 1 ? 's' : ''}`;
    const listEl = document.getElementById('clash-messages-list');
    listEl.innerHTML = activeClashes.map(c => `<li class="flex items-center gap-1.5"><span>•</span><span>${c.message}</span></li>`).join('');
  }

  // Unallocated banner
  const unallocBanner = document.getElementById('unallocated-banner');
  if (appState.telemetry.unallocated && appState.telemetry.unallocated.length > 0) {
    unallocBanner.classList.remove('hidden');
    document.getElementById('unallocated-text').textContent =
      `Could not fit: ${appState.telemetry.unallocated.join(', ')}. Try increasing faculty max hours or adding a room.`;
  } else {
    unallocBanner.classList.add('hidden');
  }

  // Lunch column visibility
  const lunchCheckbox = document.getElementById('toggle-lunch-optimizer');
  lunchCheckbox.checked = appState.uniformLunchBreak;
  const thLunch = document.getElementById('th-lunch-col');
  if (appState.uniformLunchBreak) {
    thLunch.classList.remove('hidden');
  } else {
    thLunch.classList.add('hidden');
  }

  renderEntityFilterPills();
  renderTimetableGrid(audit.clashingAllocIds);
  renderResourceTables();
  renderAnalyticsDashboard(liveMetrics);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function setPerspective(persp) {
  viewPerspective = persp;
  ['batch', 'faculty', 'room'].forEach(p => {
    const btn = document.getElementById(`persp-${p}`);
    if (p === persp) {
      btn.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-white text-indigo-700 shadow-sm transition';
    } else {
      btn.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition';
    }
  });

  if (persp === 'batch') selectedEntityId = appState.batches[0]?.id || 'CS-A';
  if (persp === 'faculty') selectedEntityId = appState.faculty[0]?.id || 'F1';
  if (persp === 'room') selectedEntityId = appState.rooms[0]?.id || 'R101';

  refreshAllUI();
}

function selectEntity(id) {
  selectedEntityId = id;
  refreshAllUI();
}

function renderEntityFilterPills() {
  const container = document.getElementById('entity-selector-pills');
  let items = [];
  if (viewPerspective === 'batch') {
    items = appState.batches.map(b => ({ id: b.id, label: b.name }));
  } else if (viewPerspective === 'faculty') {
    items = appState.faculty.map(f => ({ id: f.id, label: f.name }));
  } else {
    items = appState.rooms.map(r => ({ id: r.id, label: r.name }));
  }

  // Ensure selectedEntityId exists
  if (!items.some(i => i.id === selectedEntityId) && items.length > 0) {
    selectedEntityId = items[0].id;
  }

  container.innerHTML = items.map(item => {
    const active = item.id === selectedEntityId;
    return `
      <button onclick="selectEntity('${item.id}')"
        class="px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
          active
            ? 'bg-indigo-600 text-white shadow-sm'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }">
        ${item.label}
      </button>
    `;
  }).join('');
}

function renderTimetableGrid(clashingAllocIds) {
  // Update Context Banner Title
  const badgeEl = document.getElementById('grid-context-badge');
  const titleEl = document.getElementById('grid-context-title');
  const subEl = document.getElementById('grid-context-subtitle');
  const printSub = document.getElementById('print-subtitle');

  if (viewPerspective === 'batch') {
    const batch = appState.batches.find(b => b.id === selectedEntityId);
    badgeEl.textContent = batch ? batch.name : selectedEntityId;
    titleEl.textContent = `Batch ${batch?.name || ''} — Weekly Academic Matrix (${batch?.size || 0} Students)`;
    subEl.textContent = 'Drag & drop class cards across slots to adjust manually. Real-time CSP auditor active.';
    printSub.textContent = `Student Batch Timetable: ${batch?.name || ''} (${batch?.size || 0} Students)`;
  } else if (viewPerspective === 'faculty') {
    const fac = appState.faculty.find(f => f.id === selectedEntityId);
    const assignedHrs = appState.allocations.filter(a => a.facultyId === selectedEntityId).length;
    badgeEl.textContent = 'FACULTY';
    titleEl.textContent = `${fac?.name || ''} — Individual Teaching Schedule`;
    subEl.textContent = `Weekly Load: ${assignedHrs} / ${fac?.maxHours || 14} hrs • Shift Preference: ${fac?.preference || 'ANY'}`;
    printSub.textContent = `Faculty Teaching Schedule: ${fac?.name || ''} (${assignedHrs} hrs/week)`;
  } else {
    const room = appState.rooms.find(r => r.id === selectedEntityId);
    badgeEl.textContent = room?.type || 'ROOM';
    titleEl.textContent = `${room?.name || ''} — Room Occupancy Matrix (Capacity: ${room?.capacity || 0})`;
    subEl.textContent = 'Inspect room utilization and verify zero double-bookings across all batches.';
    printSub.textContent = `Room Occupancy Schedule: ${room?.name || ''} (Capacity: ${room?.capacity || 0})`;
  }

  // Filter allocations for current view
  const visibleAllocs = appState.allocations.filter(a => {
    if (viewPerspective === 'batch') return a.batchId === selectedEntityId;
    if (viewPerspective === 'faculty') return a.facultyId === selectedEntityId;
    if (viewPerspective === 'room') return a.roomId === selectedEntityId;
    return true;
  });

  const tbody = document.getElementById('timetable-tbody');
  tbody.innerHTML = DAYS.map((day, dayIdx) => {
    let rowCellsHtml = `
      <td class="py-3 px-4 font-bold text-xs text-slate-800 bg-slate-50/70 border-r border-slate-200 align-middle">
        <div>${DAY_NAMES[day]}</div>
        <div class="text-[10px] font-mono font-normal text-slate-400 uppercase">${day}</div>
      </td>
    `;

    PERIODS.forEach((p, pIdx) => {
      // Insert Uniform Lunch Break column between Period 3 and Period 4
      if (p.id === 4 && appState.uniformLunchBreak) {
        if (dayIdx === 0) {
          rowCellsHtml += `
            <td rowspan="5" class="bg-amber-50/50 border-r border-slate-200 text-center align-middle select-none px-1">
              <div class="flex flex-col items-center justify-center gap-1.5 text-amber-700/80">
                <i data-lucide="coffee" class="w-4 h-4"></i>
                <span class="text-[10px] font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
                  UNIFORM LUNCH BREAK
                </span>
              </div>
            </td>
          `;
        }
      }

      // Find allocations in this Day + Period
      const cellItems = visibleAllocs.filter(a => a.day === day && a.period === p.id);

      // Check if faculty is marked unavailable here (when viewing Faculty schedule)
      let unavailOverlay = '';
      if (viewPerspective === 'faculty') {
        const fac = appState.faculty.find(f => f.id === selectedEntityId);
        if (fac && fac.unavailable && fac.unavailable.includes(`${day}-${p.id}`)) {
          unavailOverlay = `
            <div class="text-[10px] font-mono text-slate-400 bg-slate-100/90 border border-dashed border-slate-300 rounded-lg px-2 py-1 text-center mb-1">
              Unavailable Slot
            </div>
          `;
        }
      }

      const cardsHtml = cellItems.map(item => {
        const sub = appState.subjects.find(s => s.id === item.subjectId);
        const fac = appState.faculty.find(f => f.id === item.facultyId);
        const room = appState.rooms.find(r => r.id === item.roomId);
        const palette = SUBJECT_COLORS[(sub?.colorIdx || 0) % SUBJECT_COLORS.length];
        const isClash = clashingAllocIds.has(item.id);

        return `
          <div
            draggable="true"
            ondragstart="handleDragStart(event, '${item.id}')"
            ondragend="handleDragEnd(event)"
            class="group relative rounded-xl p-2.5 border transition-all cursor-grab active:cursor-grabbing shadow-xs hover:shadow-md ${
              isClash ? 'clash-card' : `${palette.bg} ${palette.border} ${palette.text}`
            }"
          >
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="font-mono text-[11px] font-bold ${isClash ? 'text-rose-800' : palette.accent}">
                ${sub?.code || 'CS'}
              </span>
              <span class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                isClash
                  ? 'bg-rose-600 text-white'
                  : item.isLabBlock
                    ? 'bg-violet-600 text-white'
                    : 'bg-white/80 text-slate-700 border border-slate-200/70'
              }">
                ${isClash ? 'CLASH' : item.isLabBlock ? '3-HR LAB' : 'LECTURE'}
              </span>
            </div>

            <div class="text-xs font-bold leading-snug line-clamp-2 mb-1.5">
              ${sub?.name || 'Subject'}
            </div>

            <div class="space-y-0.5 text-[11px] opacity-85">
              <div class="flex items-center gap-1 truncate">
                <i data-lucide="user" class="w-3 h-3 shrink-0"></i>
                <span class="truncate">${fac?.name || 'Faculty'}</span>
              </div>
              <div class="flex items-center justify-between gap-1 font-mono text-[10px]">
                <span class="flex items-center gap-1 truncate">
                  <i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>
                  ${room?.name || item.roomId}
                </span>
                ${viewPerspective !== 'batch' ? `<span class="px-1.5 py-0.2 rounded bg-slate-900/10 font-bold">${item.batchId}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('');

      rowCellsHtml += `
        <td
          ondragover="handleDragOver(event)"
          ondragleave="handleDragLeave(event)"
          ondrop="handleDrop(event, '${day}', ${p.id})"
          class="p-2 align-top border-r border-slate-200 last:border-r-0 min-h-[108px] h-28 transition-colors hover:bg-slate-50/70"
        >
          <div class="flex flex-col gap-1.5 h-full">
            ${unavailOverlay}
            ${cardsHtml || (!unavailOverlay ? '<div class="h-full min-h-[84px] rounded-xl border border-transparent hover:border-dashed hover:border-slate-300 flex items-center justify-center text-[10px] text-slate-300 select-none">Free Slot</div>' : '')}
          </div>
        </td>
      `;
    });

    return `<tr class="divide-x divide-slate-200">${rowCellsHtml}</tr>`;
  }).join('');
}

// =========================================================================
// 8. RESOURCE MANAGER CRUD & RENDERING
// =========================================================================
function renderResourceTables() {
  document.getElementById('count-subjects').textContent = appState.subjects.length;
  document.getElementById('count-faculty').textContent = appState.faculty.length;
  document.getElementById('count-rooms').textContent = appState.rooms.length;
  document.getElementById('count-batches').textContent = appState.batches.length;

  // Populate form dropdowns
  const batchSelect = document.getElementById('sub-batch');
  batchSelect.innerHTML = appState.batches.map(b => `<option value="${b.id}">${b.name} (${b.size} students)</option>`).join('');

  const facSelect = document.getElementById('sub-faculty');
  facSelect.innerHTML = appState.faculty.map(f => `<option value="${f.id}">${f.name}</option>`).join('');

  // 1. Subjects Table
  document.getElementById('tbody-subjects').innerHTML = appState.subjects.map(s => {
    const fac = appState.faculty.find(f => f.id === s.facultyId);
    return `
      <tr class="hover:bg-slate-50/80">
        <td class="py-3 px-4">
          <div class="font-mono font-bold text-indigo-600">${s.code}</div>
          <div class="font-semibold text-slate-800">${s.name}</div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700">${s.batchId}</span>
        </td>
        <td class="py-3 px-4 font-medium text-slate-700">${fac ? fac.name : s.facultyId}</td>
        <td class="py-3 px-4">
          ${s.type === 'LAB'
            ? `<span class="px-2 py-0.5 rounded-full bg-violet-100 text-violet-800 font-semibold text-[11px]">3-Hr Lab Block (${s.hoursPerWeek}h)</span>`
            : `<span class="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-[11px]">${s.hoursPerWeek}× 1-Hr Lectures</span>`
          }
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteSubject('${s.id}')" class="text-rose-500 hover:text-rose-700 p-1 rounded-lg hover:bg-rose-50" title="Delete Subject">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // 2. Faculty Table
  document.getElementById('tbody-faculty').innerHTML = appState.faculty.map(f => {
    const assigned = appState.allocations.filter(a => a.facultyId === f.id).length;
    return `
      <tr class="hover:bg-slate-50/80">
        <td class="py-3 px-4 font-bold text-slate-800">${f.name}</td>
        <td class="py-3 px-4 font-mono">${assigned} / ${f.maxHours} hrs</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[11px]">${f.preference}</span>
        </td>
        <td class="py-3 px-4 font-mono text-[11px] text-slate-500">
          ${f.unavailable && f.unavailable.length > 0 ? f.unavailable.join(', ') : 'None'}
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteFaculty('${f.id}')" class="text-rose-500 hover:text-rose-700 p-1 rounded-lg hover:bg-rose-50">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // 3. Rooms Table
  document.getElementById('tbody-rooms').innerHTML = appState.rooms.map(r => `
    <tr class="hover:bg-slate-50/80">
      <td class="py-3 px-4 font-bold text-slate-800">${r.name}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${
          r.type === 'LAB' ? 'bg-violet-100 text-violet-800' : 'bg-sky-100 text-sky-800'
        }">${r.type}</span>
      </td>
      <td class="py-3 px-4 font-mono">${r.capacity} seats</td>
      <td class="py-3 px-4 text-right">
        <button onclick="deleteRoom('${r.id}')" class="text-rose-500 hover:text-rose-700 p-1 rounded-lg hover:bg-rose-50">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </td>
    </tr>
  `).join('');

  // 4. Batches Table
  document.getElementById('tbody-batches').innerHTML = appState.batches.map(b => {
    const subCount = appState.subjects.filter(s => s.batchId === b.id).length;
    return `
      <tr class="hover:bg-slate-50/80">
        <td class="py-3 px-4 font-bold text-slate-800">${b.name}</td>
        <td class="py-3 px-4 font-mono">${b.size} students</td>
        <td class="py-3 px-4">${subCount} courses</td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteBatch('${b.id}')" class="text-rose-500 hover:text-rose-700 p-1 rounded-lg hover:bg-rose-50">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleLabDurationHint() {
  const type = document.getElementById('sub-type').value;
  const hoursInput = document.getElementById('sub-hours');
  const label = document.getElementById('sub-hours-label');
  if (type === 'LAB') {
    label.textContent = 'Lab Block Hours';
    hoursInput.value = 3;
  } else {
    label.textContent = 'Weekly Lectures';
    hoursInput.value = 3;
  }
}

function handleAddSubject(e) {
  e.preventDefault();
  const code = document.getElementById('sub-code').value.trim().toUpperCase();
  const batchId = document.getElementById('sub-batch').value;
  const name = document.getElementById('sub-name').value.trim();
  const facultyId = document.getElementById('sub-faculty').value;
  const type = document.getElementById('sub-type').value;
  const hoursPerWeek = parseInt(document.getElementById('sub-hours').value, 10) || 3;

  appState.subjects.push({
    id: 'S-' + Date.now(),
    code,
    name,
    batchId,
    facultyId,
    type,
    hoursPerWeek: type === 'LAB' ? 3 : hoursPerWeek,
    colorIdx: appState.subjects.length % SUBJECT_COLORS.length
  });

  e.target.reset();
  saveState();
  refreshAllUI();
  showToast(`Added ${code}: ${name} for ${batchId}. Click "Save & Re-Solve" to schedule.`, 'success');
}

function deleteSubject(id) {
  appState.subjects = appState.subjects.filter(s => s.id !== id);
  appState.allocations = appState.allocations.filter(a => a.subjectId !== id);
  saveState();
  refreshAllUI();
}

function handleAddFaculty(e) {
  e.preventDefault();
  const name = document.getElementById('fac-name').value.trim();
  const maxHours = parseInt(document.getElementById('fac-max-hours').value, 10) || 14;
  const preference = document.getElementById('fac-pref').value;
  const unavailDay = document.getElementById('fac-unavail-day').value;

  let unavailable = [];
  if (unavailDay === 'Mon') unavailable = ['Mon-1', 'Mon-2'];
  if (unavailDay === 'Wed') unavailable = ['Wed-5', 'Wed-6'];
  if (unavailDay === 'Fri') unavailable = ['Fri-4', 'Fri-5', 'Fri-6'];

  appState.faculty.push({
    id: 'F-' + Date.now(),
    name,
    maxHours,
    preference,
    unavailable
  });

  e.target.reset();
  saveState();
  refreshAllUI();
  showToast(`Registered faculty member ${name}.`, 'success');
}

function deleteFaculty(id) {
  appState.faculty = appState.faculty.filter(f => f.id !== id);
  saveState();
  refreshAllUI();
}

function handleAddRoom(e) {
  e.preventDefault();
  const name = document.getElementById('room-name').value.trim();
  const type = document.getElementById('room-type').value;
  const capacity = parseInt(document.getElementById('room-cap').value, 10) || 60;

  appState.rooms.push({
    id: 'R-' + Date.now(),
    name,
    type,
    capacity
  });

  e.target.reset();
  saveState();
  refreshAllUI();
  showToast(`Added ${name} (Capacity: ${capacity}).`, 'success');
}

function deleteRoom(id) {
  appState.rooms = appState.rooms.filter(r => r.id !== id);
  saveState();
  refreshAllUI();
}

function handleAddBatch(e) {
  e.preventDefault();
  const name = document.getElementById('batch-name').value.trim().toUpperCase();
  const size = parseInt(document.getElementById('batch-size').value, 10) || 60;

  appState.batches.push({
    id: name,
    name,
    size
  });

  e.target.reset();
  saveState();
  refreshAllUI();
  showToast(`Added student batch ${name}.`, 'success');
}

function deleteBatch(id) {
  appState.batches = appState.batches.filter(b => b.id !== id);
  saveState();
  refreshAllUI();
}

// =========================================================================
// 9. ANALYTICS DASHBOARD RENDERING
// =========================================================================
function renderAnalyticsDashboard(metrics) {
  document.getElementById('stat-total-hours').textContent = `${metrics.totalHours} hrs`;
  document.getElementById('stat-gini-big').textContent = metrics.gini.toFixed(2);
  document.getElementById('stat-pref-big').textContent = `${metrics.prefScore}%`;

  const labBlocks = new Set(appState.allocations.filter(a => a.isLabBlock).map(a => a.blockGroupId)).size;
  document.getElementById('stat-labs-count').textContent = `${labBlocks} Blocks`;

  const barsContainer = document.getElementById('faculty-workload-bars');
  barsContainer.innerHTML = appState.faculty.map(f => {
    const hrs = appState.allocations.filter(a => a.facultyId === f.id).length;
    const pct = Math.min(100, Math.round((hrs / f.maxHours) * 100));
    const isOver = hrs > f.maxHours;

    return `
      <div>
        <div class="flex items-center justify-between text-xs mb-1">
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-800">${f.name}</span>
            <span class="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-500">${f.preference}</span>
          </div>
          <span class="font-mono font-semibold ${isOver ? 'text-rose-600' : 'text-slate-700'}">
            ${hrs} / ${f.maxHours} hrs (${pct}%)
          </span>
        </div>
        <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div class="h-full rounded-full transition-all duration-500 ${
            isOver ? 'bg-rose-500' : pct > 80 ? 'bg-indigo-600' : 'bg-emerald-500'
          }" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

// =========================================================================
// 10. ICAL (.ICS) CALENDAR EXPORTER
// =========================================================================
function exportICS() {
  const visibleAllocs = appState.allocations.filter(a => {
    if (viewPerspective === 'batch') return a.batchId === selectedEntityId;
    if (viewPerspective === 'faculty') return a.facultyId === selectedEntityId;
    if (viewPerspective === 'room') return a.roomId === selectedEntityId;
    return true;
  });

  const dayOffsetMap = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4 };
  const periodHourMap = { 1: 9, 2: 10, 3: 11, 4: 13, 5: 14, 6: 15 };

  // Anchor to upcoming Monday
  const now = new Date();
  const dayOfWeek = now.getDay();
  const diffToMon = (dayOfWeek === 0 ? 1 : 8 - dayOfWeek);
  const baseMonday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diffToMon);

  const pad = n => String(n).padStart(2, '0');
  const formatICSDate = (dateObj, hour) => {
    return `${dateObj.getFullYear()}${pad(dateObj.getMonth() + 1)}${pad(dateObj.getDate())}T${pad(hour)}0000`;
  };

  let icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ClassClockwork ZeroClash//Academic Scheduler//EN',
    'CALSCALE:GREGORIAN'
  ];

  visibleAllocs.forEach(a => {
    const sub = appState.subjects.find(s => s.id === a.subjectId);
    const fac = appState.faculty.find(f => f.id === a.facultyId);
    const room = appState.rooms.find(r => r.id === a.roomId);

    const eventDate = new Date(baseMonday);
    eventDate.setDate(baseMonday.getDate() + (dayOffsetMap[a.day] || 0));
    const startHour = periodHourMap[a.period] || 9;

    icsLines.push(
      'BEGIN:VEVENT',
      `UID:${a.id}@classclockwork.edu`,
      `DTSTAMP:${formatICSDate(new Date(), 8)}`,
      `DTSTART:${formatICSDate(eventDate, startHour)}`,
      `DTEND:${formatICSDate(eventDate, startHour + 1)}`,
      `SUMMARY:${sub?.code || 'CLASS'} - ${sub?.name || 'Lecture'} (${a.batchId})`,
      `LOCATION:${room?.name || a.roomId}`,
      `DESCRIPTION:Instructor: ${fac?.name || a.facultyId} | Batch: ${a.batchId}`,
      'RRULE:FREQ=WEEKLY;COUNT=15',
      'END:VEVENT'
    );
  });

  icsLines.push('END:VCALENDAR');

  const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ClassClockwork_${selectedEntityId}_Schedule.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast(`Downloaded ClassClockwork_${selectedEntityId}_Schedule.ics for Google/Apple Calendar.`, 'success');
}

// =========================================================================
// 11. NAVIGATION & TOAST HELPERS
// =========================================================================
function switchMainTab(tab) {
  currentMainTab = tab;
  ['timetable', 'resources', 'analytics'].forEach(t => {
    const sec = document.getElementById(`view-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    const mobBtn = document.getElementById(`mob-tab-${t}`);
    if (t === tab) {
      sec.classList.remove('hidden');
      if (btn) btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition bg-indigo-600 text-white shadow-sm';
      if (mobBtn) mobBtn.className = 'flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 bg-indigo-600 text-white';
    } else {
      sec.classList.add('hidden');
      if (btn) btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition text-slate-300 hover:text-white';
      if (mobBtn) mobBtn.className = 'flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-300';
    }
  });
  refreshAllUI();
}

function switchResourceSubTab(subTab) {
  currentResourceSubTab = subTab;
  ['subjects', 'faculty', 'rooms', 'batches'].forEach(st => {
    const panel = document.getElementById(`panel-res-${st}`);
    const btn = document.getElementById(`res-sub-${st}`);
    if (st === subTab) {
      panel.classList.remove('hidden');
      panel.classList.add('grid');
      btn.className = 'px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white shadow-sm';
    } else {
      panel.classList.add('hidden');
      panel.classList.remove('grid');
      btn.className = 'px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-600 border border-slate-200 hover:bg-slate-50';
    }
  });
}

function toggleLunchBreakSetting() {
  appState.uniformLunchBreak = document.getElementById('toggle-lunch-optimizer').checked;
  saveState();
  refreshAllUI();
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const colors = {
    success: 'bg-slate-900 text-white border-emerald-500',
    error: 'bg-rose-950 text-white border-rose-500',
    warning: 'bg-amber-950 text-white border-amber-500',
    info: 'bg-slate-900 text-white border-indigo-500'
  };
  toast.className = `pointer-events-auto px-4 py-3 rounded-xl border-l-4 shadow-xl text-xs font-medium flex items-center justify-between gap-3 transition-all ${colors[type] || colors.info}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 250);
  }, 4200);
}

// Boot Application
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  if (!appState.allocations || appState.allocations.length === 0) {
    runCSPSolver();
  } else {
    refreshAllUI();
  }
});