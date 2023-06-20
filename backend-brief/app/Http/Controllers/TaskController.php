<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Brief;
class TaskController extends Controller
{
    public function index()
    {
        $data = Task::all();
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $insert_Task = new Task;
        $insert_Task->name_task = $request->name_task;
        $insert_Task->start_task = $request->start_task;
        $insert_Task->end_task = $request->end_task;
        $insert_Task->état = $request->état;
        $insert_Task->id_brief = $request->id_brief;

        $insert_Task->save();
        return response()->json($insert_Task);
    }

    public function getTask($id)
    {
        $get_Task = Task::find($id);
        return response()->json($get_Task);
    }

    public function update(Request $request, $id)
    {
        $update_Task = Task::find($id);
        $update_Task->name_task = $request->name_task;
        $update_Task->start_task = $request->start_task;
        $update_Task->end_task = $request->end_task;
        $update_Task->état = $request->état;

        $update_Task->save();
        return response()->json($update_Task);
    }

    public function destroy($id)
    {
        $delete_Task = Task::find($id);
        $delete_Task->delete();
        return response()->json($delete_Task);
    }
}
