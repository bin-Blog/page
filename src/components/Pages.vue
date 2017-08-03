<template>
  <div class="row">
    <loadingHourGlass></loadingHourGlass>
    <div class="col-xs-12 top-offset-15 bottom-offset-15">
      <div><strong class="pull-left line-height-24 right-offset-15">自动刷新开关:</strong>
        <iphoneSwitcher v-bind:status="refresh.status" v-bind:canSwitch="false"
                        v-bind:callBackName="'switchRefreshStatus'"></iphoneSwitcher>
      </div>
      <button type="button" class="btn btn-sm btn-primary pull-right" v-on:click="editRecord()">添加任务</button>
    </div>
    <div class="col-xs-12 main-table-wrapper"><h4 class="page-header">点播刷新任务数据表格
      <!-- <small>Secondary text</small> --></h4>        <!-- <p>123</p> -->
      <table class="table table-striped table-hover table-bordered" id="main-table">
        <thead>
        <tr>
          <th>名称</th>
          <th>状态</th>
          <th>完成率</th>
          <th>创建时间</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody><!-- v-bind:class=" (item.completeCount/item.total=='1')?'text-success':'text-danger' " -->
        <tr v-for="item in tableList" v-bind:class="'id-' + item.id">
          <td>{{ item.file_name }}</td>              <!-- {{ item.status | statusFilter }} -->
          <td class="status"></td>
          <!-- v-bind:class=" (item.completeCount/item.total=='1')?'text-success':'text-danger' " -->
          <!-- {{ item.completeRate }} -->
          <td class="rate"></td>
          <td>{{ item.create_time }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button type="button" class="btn btn-primary btn-xs" v-on:click="showDetailModal(item.id,item.file_name)">
              详情
            </button>
            <!-- <button type="button" class="btn btn-danger btn-xs" v-on:click="test()">test</button> -->
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
