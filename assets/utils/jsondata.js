const data = [{
  "intent": "renewal",
  "product": "aos",
  "created_date": "2022-08-01",
  "account_id": "0010e00001Iv60LAAR",  
  "Account_Name": "Kementerian Komunikasi dan Informatika",
  "risk_score": "0.7",
  "features": {
    "account_ltb": "795493",
    "region": "Americas USA Federal",
    "cpu_usage": "16.27",
    "storage_usage": "23.66",
    "memory_usage": "35.36",
    "csat_avg": "9.63",
    "nps_avg": "9.12",
    "total_cases": 3,
    "nps_score": "86.38",
    "won_opps_count": "0",
    "lost_opps_count": "0",
    "won_opps_tcv": 0,
    "lost_opps_tcv": 0,
    "won_opps_acv_amount": "0",
    "lost_opps_acv_amount": "0",
    "account_total_opps_count": 38,
    "account_total_won_opps": "7.0",
    "act_aos_license_count": 10,
    "act_aos_activation_percent": 90.84,
    "act_license_units_available": "816.00",
    "act_license_units_consumed": 0,
    "total_support_cases": 5,
    "p1_case_count": 0,
    "p2_case_count": 0,
    "p3_case_count": 5,
    "p4_case_count": 0,
    "currently_active_case_count": 0,
    "currently_active_p1_p2_case_count": 0,
    "days_since_last_lost": 2,
    "days_since_last_won": 201,
    "deal_lost": false,
    "recent_purchase_amount": null,
    "account_type": null,
    "renewal_lost_opps_count": null,
    "renewal_won_opps_count": null,
    "products": null,
    "products_count": null,
    "training_certificate_count": null,
    "contacts_count": null,
    "pulse_percentage": null
  },
  "feature_contribution_scores":   {
    "account_ltb": -0.46143908465217054,
    "days_since_last_lost": 0.5755304144007722,
    "act_license_units_consumed": -0.17596423318028456,
    "cpu_usage": -0.12256394962545616,
    "days_since_last_won": 0.22942422263296544,
    "lost_opps_acv_amount": -0.16141175253669515,
    "won_opps_count": 0.060475901329037844,
    "act_aos_activation_percent": 0.07831023984095233,
    "csat_avg": -0.02219725711160547,
    "region": -0.09968730605878212,
    "p4_case_count": -0.04803669172555097,
    "account_total_won_opps": -0.09717496699473019,
    "total_support_cases": 0.3254618343847557,
    "act_aos_license_count": -0.12158858774764732,
    "account_total_opps_count": -0.2001602653758812,
    "p2_case_count": -0.05755208800850647,
    "storage_usage": 0.08915368473220278,
    "won_opps_acv_amount": 0.040809076135051116,
    "act_license_units_available": -0.09672789853551039,
    "total_cases": 0.02064324431124315,
    "won_opps_tcv": -0.03796581498373053,
    "currently_active_case_count": 0.00561391927072563,
    "memory_usage": -0.16629500682872508,
    "currently_active_p1_p2_case_count": 0.012904710013684206,
    "p3_case_count": 0.018596437034781237,
    "nps_avg": 0.06821215665878558,
    "p1_case_count": 0.032202028977046576,
    "lost_opps_count": 0,
    "lost_opps_tcv": 0,
    "nps_score": 0,
    "recent_purchase_amount": null,
    "account_type": null,
    "products_count": null,
    "renewal_lost_opps_count": null,
    "renewal_won_opps_count": null,
    "recreated_score": null,
    "training_certificate_count": null,
    "contacts_count": null,
    "pulse_percentage": null
    }
},
  {
    "intent": "propensity",
    "product": "era",
    "created_date": "",
    "account_id": "0010e00001Iv60LAAR",  
    "Account Name": "Kementerian Komunikasi dan Informatika",
    "propensity_score": "0.7",
    "features": {
      "account_ltb": "795493",
      "region": "Americas USA Federal"
    },
    "feature_contrib_scores": {
      "account_ltb": "795493",
      "region": "Americas USA Federal"
    }
  }, {
    "intent": "upsell",
    "product": "aos",
    "created_date": "2022-08-01",
    "account_id": "0010e00001Iv60LAAR",  
    "Account Name": "Kementerian Komunikasi dan Informatika",
    "features": {
      "memory_usage": {
        "min": "20",
        "max": "80",
        "avg": "30"
      },
      "storage_usage": {
        "min": "20",
        "max": "80",
        "avg": "30"
      },
      "cpu_usage": {
        "min": "20",
        "max": "80",
        "avg": "30"
      }
    }
}];

const masterData = JSON.parse(data);
export { masterData };