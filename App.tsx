import * as React from 'react';
import * as toml from 'toml';
import * as ltdtoml from '@ltd/j-toml';
import * as iarnatoml from '@iarna/toml';

import './style.css';

export default function App() {
  const testString = `##
  [global_tags]
  dc = "five.sensory.lab"
  rack = "RACK-A-01"
  
  [agent]
  interval = "10s"
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "0s"
  flush_interval = "10s"
  flush_jitter = "0s"
  precision = ""
  hostname = "minion02"
  omit_hostname = false
  
  [[outputs.influxdb]]
  urls = [ "http://192.168.56.107:8086" ]
  database = "Default"
  retention_policy = ""
  write_consistency = "any"
  username = ""
  password = ""
  
  [[inputs.cpu]]
  percpu = true
  totalcpu = true
  collect_cpu_time = false
  report_active = false
  
  `;
  const ltdTomlObject = ltdtoml.parse(testString);
  console.log(ltdTomlObject);

  const ltdTomlString = ltdtoml.stringify(ltdTomlObject);
  console.log(ltdTomlString);

  // const iarnaTomlObject = iarnatoml.parse(testString);
  // console.log(iarnaTomlObject);

  // const iarnaTString = iarnatoml.stringify(iarnaTomlObject);
  // console.log(iarnaTString);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
