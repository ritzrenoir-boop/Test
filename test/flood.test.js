import {floodRisk} from '../src/analysis/flood.js';
const loc={name:'Test',latitude:0,longitude:0};
function w(r,p){return{hourly:{time:Array.from({length:5},(_,i)=>new Date(Date.now()+i*36e5).toISOString()),rain:[r,r,r,r,r],precipitation_probability:[p,p,p,p,p],cloud_cover:[90,90,90,90,90]}}}
import test from 'node:test';import assert from 'node:assert/strict';
test('floodRisk deterministic and high for heavy rain',()=>{const a=floodRisk(loc,w(5,90),{meters:50});const b=floodRisk(loc,w(5,90),{meters:50});assert.equal(a.risk_score,b.risk_score);assert.match(a.risk_level,/HIGH|VERY HIGH/)});
test('floodRisk reports insufficient data',()=>{assert.equal(floodRisk(loc,null,{}).risk_level,'INSUFFICIENT DATA')})
